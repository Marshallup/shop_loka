<template>
  <div>
    <div v-for="goodCart in goods" :key="goodCart.id" class="border-b-black">
      <CardCart
        :title="goodCart.good.title"
        :img="getPublicImageSrc(goodCart.good.mainPhoto?.path)"
        :count="goodCart.count"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { GoodCart } from "@/store/cart";
const { getPublicImageSrc } = useImage();

interface CartGoodsProps {
  goods: GoodCart[];
}

defineProps<CartGoodsProps>();
</script>

<style scoped></style>
