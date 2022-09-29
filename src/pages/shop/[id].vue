<template>
  <div class="text-black">
    <div class="mt-[113px]">
      <BaseHeaderSpace />
      <div v-if="data">
        <BaseContainer>
          <div class="flex gap-x-12">
            <div class="w-1/2">
              <SliderShopItemPage :slides="slides" />
            </div>

            <div class="max-w-[550px] w-1/2">
              <div v-if="data.category?.title" class="uppercase mb-5">
                {{ data.category?.title }}
              </div>
              <div class="font-newYork text-6xl max-w-[490px] mb-3">
                <!-- Altantic Cedar Facial Moisturizer -->
                {{ data.title }}
              </div>
              <div class="mb-8">
                {{ data.volume }} ml / {{ convertMlToOz(data.volume) }}oz
              </div>
              <!-- Your skin reacts different in the winter from summer, our
                products treat your skin with the proper vitamins for every
                season so it's healthy year-round. -->
              <div v-html="data.desc" class="max-w-[470px] mb-14" />

              <div class="mb-14">
                <BaseTableLineDown
                  :data="[
                    {
                      id: '1',
                      title: 'Skin Touch',
                      content: 'Cleansed, Refreshing, Gently Moist',
                    },
                    {
                      id: '2',
                      title: 'Texture',
                      content: 'Light yet nourishing gel-cream',
                    },
                  ]"
                />
              </div>

              <div class="flex justify-between items-center">
                <div>$ 42.00</div>
                <div>
                  <BaseButton size="lg" title="add too tour bag" />
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-x-12">
            <div class="w-1/2">
              <BaseTableLineDown
                title="ingredients"
                :data="[
                  {
                    id: '1',
                    title: 'Distilled water',
                    content: 'Cleansed, Refreshing, Gently Moist',
                  },
                ]"
              />
            </div>
            <div class="w-1/2 max-w-[550px]">
              <BaseTypography tag="title3"> how to use </BaseTypography>

              <div>
                <BaseTypography class="max-w-[330px]">
                  After cleansing and toning, apply generously to the face and
                  neck. For best results, leave on the skin overnight and rinse
                  in the morning during routine cleansing.
                </BaseTypography>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
      <div v-else>
        <BaseTypography tag="title2" class="text-center mb-5">
          Товара не найдено!
        </BaseTypography>
        <div class="flex justify-center">
          <NuxtLink to="/shop">
            <BaseButton title="Вернуться к списку товаров" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <div v-if="data" class="mt-[10rem] mb-[3rem]">
      <div>
        <SliderGoodsLike title="You may also like" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { convertMlToOz } from "@/domain/good";
import { FetchGoods } from "~~/src/services/goods";

const route = useRoute();
const goodID = computed(() => +route.params.id);

const { data } = await FetchGoods.getByID(unref(goodID));
const { getPublicImageSrc } = useImage();

const slides = computed(() => {
  if (unref(data)?.images) {
    return unref(data).images.map((img) => ({
      id: img.id,
      src: getPublicImageSrc(img.path),
    }));
  }

  return [];
});
</script>

<style scoped></style>
