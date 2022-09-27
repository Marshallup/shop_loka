<template>
  <div class="mb-4 last:mb-0">
    <div class="mt-5 mb-10">
      <div
        v-for="(item, itemIdx) in data"
        :key="item.id"
        class="mb-14 last:mb-0"
      >
        <div v-if="itemIdx !== 0" class="mb-11">
          <CatalogListTitle
            :title="item.categoryTitle"
            :count="item.countGoods"
          />
        </div>

        <div class="grid grid-cols-2 border-black border-b">
          <CardCatalog
            v-for="good in item.goods"
            :src="getPublicImageSrc(good.mainPhoto?.path)"
            :link="`/shop/${good.id}`"
            :title="good.title"
            :key="good.id"
            class="basis-2/4 border-black border-r border-t even:border-r-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Category } from "@/domain/category";
import { IData } from "~~/src/types/components/GoodsList";

interface BaseCatalogListProps {
  filterVal: "all" | number;
  data?: IData[];
  caregories: Category[];
}

withDefaults(defineProps<BaseCatalogListProps>(), {
  data: () => [],
});
const { getPublicImageSrc } = useImage();
</script>

<style scoped></style>
