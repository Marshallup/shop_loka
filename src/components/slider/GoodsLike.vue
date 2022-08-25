<template>
  <div>
    <BaseContainer>
      <div
        class="
          flex
          items-center
        "
      >
        <div v-if="props.title">
          <BaseTypography
            tag="title1"
            class="font-newYork"
          >
            {{ props.title }}
          </BaseTypography>
        </div>
        <div
          class="
            ml-auto
          "
        >
          <div
            class="
              flex
              gap-x-6
            "
          >
            <BaseButton
              dir="left"
              size="sm"
              class="goods-like__arrow-left"
              @click="prevSilde"
            />
            <BaseButton
              size="sm"
              class="goods-like__arrow-right"
              @click="nextSlide"
            />
          </div>
        </div>
      </div>
    </BaseContainer>

    <div
      class="mt-12"
    >
      <BaseContainer
        remove-side="right"
      >
        <swiper
          :modules="modules"
          :slidesPerView="3.4"
          :spaceBetween="23"
          class="
            h-full
          "
          @swiper="onSwiper"
        >
          <SwiperSlide>
            <CardFill
              title="Moisturizing cream"
              company="cleanser"
              price="42"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardFill
              title="Moisturizing cream123"
              company="cleanser"
              price="42"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardFill
              title="Moisturizing cream123"
              company="cleanser"
              price="42"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardFill
              title="Moisturizing cream123"
              company="cleanser"
              price="42"
            />
          </SwiperSlide>
        </swiper>
      </BaseContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Navigation, Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';

interface SliderGoodsLikeProps {
  title?: string,
}

const props = defineProps<SliderGoodsLikeProps>();
const modules = [ Navigation ];
const swiperEx = ref<SwiperClass | null>(null);

function onSwiper(swiperEl: SwiperClass) {
  swiperEx.value = swiperEl;
}

function nextSlide() {
  if (unref(swiperEx)) {
    unref(swiperEx).slideNext();
  }
}

function prevSilde() {
  if (unref(swiperEx)) {
    unref(swiperEx).slidePrev();
  }
}

</script>

<style scoped>

</style>
