<template>
  <div>
    <BaseHeaderSpace />
    <div class="mb-8">
      <FilterCatalog
        v-model="categoryID"
        :title="firstCategoryTitle"
        :count="firstCategoryCount"
        :dropdown-data="dropdownFilterData"
      />
      <CatalogList
        v-model:filter-val="categoryID"
        :data="catalogData"
        :caregories="categories"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IData } from "~~/src/types/components/GoodsList";
import { FetchCategories } from "~~/src/services/categories";
import { FetchGoods } from "~~/src/services/goods";
import { getUniqID } from "~~/src/utils/helpers";

const { data: goods, categoryID } = await FetchGoods.getAll();
const { data: categories } = await FetchCategories.getAll();

const dropdownFilterData = computed(() => {
  const categoriesData = unref(categories).map((category) => ({
    value: category.id,
    label: category.title,
  }));

  return [{ value: "all", label: "All" }, ...categoriesData];
});
const catalogData = computed(() => {
  const arr: IData[] = [];

  unref(categories).forEach((category) => {
    const goodsFiltered = unref(goods).filter(
      (good) => good.category?.id === category.id
    );

    if (goodsFiltered.length) {
      arr.push({
        id: getUniqID(),
        categoryTitle: category.title,
        countGoods: goodsFiltered.length,
        goods: goodsFiltered,
      });
    }
  });

  return arr;
});
const firstCategoryTitle = computed(() => unref(catalogData)[0]?.categoryTitle);
const firstCategoryCount = computed(() => unref(catalogData)[0]?.countGoods);
</script>

<style scoped></style>
