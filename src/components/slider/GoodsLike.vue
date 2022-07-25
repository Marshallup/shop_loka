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
          nav
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
          :navigation="true as undefined"
          class="
            h-full
          "
        >
          <SwiperSlide>
            slide1
          </SwiperSlide>
          <SwiperSlide>
            slide2
          </SwiperSlide>
        </swiper>
      </BaseContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';

interface SliderGoodsLikeProps {
  title?: string,
}

const props = defineProps<SliderGoodsLikeProps>();
const modules = [ Navigation ];

</script>

<style scoped>

</style>
