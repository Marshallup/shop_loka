<template>
  <div
    class="
      w-full
      h-[500px]
      shop-item-slider
    "
  >
    <swiper
      :modules="modules"
      effect="fade"
      :pagination="{ clickable: true } as undefined"
      class="
        h-full
      "
    >
      <swiper-slide
        v-for="slide in props.slides"
        :key="slide.id"
        class="bg-blueOpacity"
      >
        <div
          class="
            flex
            justify-center
            items-center
            h-full
          "
        >
          <img
            width="345"
            height="400"
            :src="slide.src"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { EffectFade, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

interface SliderShopItemPageProps {
  slides: {
    id: string,
    src: string,
  }[],
}

const props = defineProps<SliderShopItemPageProps>();

const modules = [ EffectFade, Pagination ];

</script>

<style lang="scss" scoped>
.shop-item-slider {
  :deep(.swiper-pagination) {
    width: auto;
    bottom: 20px;
    right: 20px;
    left: auto;
    display: flex;
    justify-content: flex-end;
  }
  :deep(.swiper-pagination-bullet) {
    background-color: var(--beigeOther);
  }
  :deep(.swiper-pagination-bullet-active) {
    background-color: black;
  }
}
</style>
