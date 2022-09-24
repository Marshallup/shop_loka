<template>
  <div class="mb-4 last:mb-0">
    <div class="mt-5 mb-10">
      <div
        v-for="(item, idxItem) in data"
        :key="item.id"
        class="mb-14 last:mb-0"
      >
        <div class="mb-11">
          <BaseContainer>
            <div class="flex justify-between items-center">
              <div class="relative text-black">
                <h5 class="font-newYork text-6xl pr-5">
                  {{ item.categoryTitle }}
                </h5>
                <span class="absolute text-sm font-normal top-0 right-0">
                  ({{ item.countGoods }})
                </span>
              </div>
              <div v-if="idxItem == 0">
                <DropdownSimple
                  v-model="filterVal"
                  :data="[{ value: 'ww', label: 'test' }]"
                />
              </div>
            </div>
          </BaseContainer>
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
import { Good } from "@/domain/good";
import { getUniqID } from "~~/src/utils/helpers";

interface BaseCatalogListProps {
  goods: Good[];
  caregories: Category[];
}
interface IData {
  id: number;
  categoryTitle: string;
  countGoods: number;
  goods: Good[];
}

const props = defineProps<BaseCatalogListProps>();
const { getPublicImageSrc } = useImage();

const filterVal = ref(null);
const data = computed<IData[]>(() => {
  const arr = [];

  props.caregories.forEach((category) => {
    const goodsFiltered = props.goods.filter(
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
</script>

<style scoped></style>
