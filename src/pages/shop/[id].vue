<template>
  <div class="text-black">
    <div class="mt-[113px]">
      <BaseHeaderSpace />

      <div v-if="good">
        <BaseContainer>
          <div class="flex gap-x-12">
            <div class="w-1/2">
              <SliderShopItemPage :slides="slides" />
            </div>

            <div class="max-w-[550px] w-1/2">
              <div v-if="good.category?.title" class="uppercase mb-5">
                {{ good.category?.title }}
              </div>
              <div class="font-newYork text-6xl max-w-[490px] mb-3">
                <!-- Altantic Cedar Facial Moisturizer -->
                {{ good.title }}
              </div>
              <div class="mb-8">
                {{ good.volume }} ml / {{ convertMlToOz(good.volume) }}oz
              </div>
              <!-- Your skin reacts different in the winter from summer, our
                products treat your skin with the proper vitamins for every
                season so it's healthy year-round. -->
              <div v-html="good.desc" class="max-w-[470px] mb-14" />

              <div class="mb-14">
                <BaseTableLineDown :data="characteristics" />
              </div>

              <div class="flex justify-between items-center">
                <div>$ {{ good.price }}</div>
                <div>
                  <BaseButton
                    size="lg"
                    title="add too tour bag"
                    @click="onAddCartBtn"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-x-12">
            <div class="w-1/2">
              <BaseTableLineDown title="ingredients" :data="ingredients" />
            </div>
            <div class="w-1/2 max-w-[550px]">
              <BaseTypography tag="title3"> how to use </BaseTypography>

              <div>
                <BaseTypography class="max-w-[330px]">
                  <span v-html="good.howUse" />
                </BaseTypography>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
      <div v-else>
        <BaseEmptyPage
          title="Товара не найдено!"
          btn-text="Вернуться к списку товаров"
          link="/shop"
        />
      </div>
    </div>

    <div v-if="good" class="mt-[10rem] mb-[3rem]">
      <div>
        <SliderGoodsLike title="You may also like" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { convertMlToOz } from "@/domain/good";
import { FetchGoods } from "~~/src/services/goods";
import { useCartStore } from "~~/src/store/cart";

const route = useRoute();
const cartStore = useCartStore();
const goodID = computed(() => +route.params.id);

const { data: good } = await FetchGoods.getByID(unref(goodID));
const { getPublicImageSrc } = useImage();

const slides = computed(() => {
  if (unref(good)?.images) {
    return unref(good).images.map((img) => ({
      id: img.id,
      src: getPublicImageSrc(img.path),
    }));
  }

  return [];
});

const characteristics = computed(() => {
  if (unref(good)?.tags) {
    return unref(good).tags.map((tag) => ({
      id: tag.id,
      title: tag.title,
      content: tag?.characteristics?.map((ch) => ch.title)?.join(", ") || "",
    }));
  }

  return [];
});

const ingredients = computed(() => {
  if (unref(good)?.tags) {
    return unref(good).tags.map((tag) => ({
      id: tag.id,
      title: tag.title,
      content: tag?.ingredients?.map((ch) => ch.title)?.join(", ") || "",
    }));
  }

  return [];
});

function onAddCartBtn() {
  cartStore.addGood(unref(good));
}
</script>

<style scoped></style>
