<template>
  <div>
    <BaseHeaderSpace />
    <div class="mb-8">
      <CatalogList
        :filter-val="categoryID"
        :goods="goods"
        :caregories="categories"
        @update:filter-val="onUpdateFilterVal"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FetchCategories } from "~~/src/services/categories";
import { FetchGoods, CategoryID } from "~~/src/services/goods";

const { data: goods, categoryID } = await FetchGoods.getAll();
const { data: categories } = await FetchCategories.getAll();

function onUpdateFilterVal(val: CategoryID) {
  categoryID.value = val;
}
</script>

<style scoped></style>
