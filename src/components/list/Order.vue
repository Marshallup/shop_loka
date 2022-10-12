<template>
  <div class="border-regular-2 border p-10">
    <BaseTypography tag="div" type="title5">Ваш заказ:</BaseTypography>

    <div>
      <div v-if="currentOrder">
        <CardOrder
          v-for="goodsInfo in currentOrder.goodsInfo"
          :key="goodsInfo.id"
          :img="getPublicImageSrc(goodsInfo.good.mainPhoto?.path)"
          :title="goodsInfo.good.title"
          :vendor-code="goodsInfo.good.vendorCode"
          :price="goodsInfo.good.price"
          :count="goodsInfo.count"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrdersStore } from "@/store/orders";
import useImage from "@/composables/useImage";

const { getPublicImageSrc } = useImage();
const ordersStore = useOrdersStore();

const currentOrder = computed(() => ordersStore.currentOrder);
</script>

<style scoped></style>
