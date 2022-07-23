<template>
  <div
    class="w-[600px]"
  >
    <swiper
      :modules="modules"
      effect="fade"
      pagination
    >
      <swiper-slide
        class="bg-blueOpacity"
      >
        Slide 1
      </swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
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

const modules = [ EffectFade, Pagination ];

</script>

<style scoped>

</style>
