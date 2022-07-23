<template>
  <div class="mb-4 last:mb-0">
    <div class="mt-5 mb-10">
      <div
        v-for="(item, idxItem) in data"
        :key="item.id"
        class="
          mb-14
          last:mb-0
        "
      >
        <div class="mb-11">
          <BaseContainer>
            <div
              class="
                flex
                justify-between
                items-center
              "
              >
              <div class="relative text-black">
                <h5 class="font-newYork text-6xl pr-5">
                  {{ item.categoryTitle }}
                </h5>
                <span
                  class="
                    absolute
                    text-sm
                    font-normal
                    top-0
                    right-0
                  "
                >
                  ({{ item.countGoods }})
                </span>
              </div>
              <div v-if="idxItem == 0">
                filtr
              </div>
            </div>
          </BaseContainer>
        </div>

        <div
          class="
            grid
            grid-cols-2
            border-black
            border-b
          "
        >
          <CatalogListItem
            v-for="good in item.goods"
            :key="good.id"
            class="
              basis-2/4
              border-black
              border-r
              border-t
              even:border-r-0
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface BaseCatalogListProps {
  data: {
    id: string,
    categoryTitle?: string,
    countGoods: number,
    goods: {
      id: string,
      image: string,
    }[],
  }[],
}

const props = defineProps<BaseCatalogListProps>();
</script>

<style scoped>

</style>
