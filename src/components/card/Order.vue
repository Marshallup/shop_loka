<template>
  <div class="flex border-regular-2 border-t pt-6 pb-6 last:pb-0">
    <div class="pr-8">
      <div>
        <img width="112" height="108" :src="img" />
      </div>
    </div>

    <div class="flex-1">
      <BaseTypography tag="div" type="title5" class="mb-2">{{
        title
      }}</BaseTypography>
      <BaseTypography tag="div" type="small1" class="text-regular-2 mb-2"
        >Артикул: {{ vendorCode }}</BaseTypography
      >
      <BaseTypography>Количество {{ count }}</BaseTypography>
    </div>

    <div>
      <BaseTypography tag="div" type="text1">{{
        rubFormat(price)
      }}</BaseTypography>
    </div>
  </div>
</template>

<script setup lang="ts">
import { rubFormat } from "~~/src/utils/priceFormat";

interface OrderCard {
  img: string | null;
  title: string;
  vendorCode: string;
  count: number;
  price: number;
}

withDefaults(defineProps<OrderCard>(), {
  title: "Стул OLEA",
  vendorCode: "Артикул: 640022",
  count: 8,
  price: 560000,
});
</script>

<style scoped></style>
