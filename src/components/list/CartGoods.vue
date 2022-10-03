<template>
  <div>
    <div v-for="goodCart in goods" :key="goodCart.id" class="border-b-black">
      <CardCart
        :title="goodCart.good.title"
        :img="getPublicImageSrc(goodCart.good.mainPhoto?.path)"
        :count="goodCart.count"
        :vendor-code="goodCart.good.vendorCode"
        :price="goodCart.good.price"
        @delete="onDelete(goodCart.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { GoodCart } from "@/store/cart";
const { getPublicImageSrc } = useImage();

interface CartGoodsEmits {
  (e: "delete", val: number): void;
}
interface CartGoodsProps {
  goods: GoodCart[];
}

const emits = defineEmits<CartGoodsEmits>();
defineProps<CartGoodsProps>();

function onDelete(id: number) {
  emits("delete", id);
}
</script>

<style scoped></style>
