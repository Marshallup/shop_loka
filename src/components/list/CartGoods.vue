<template>
  <div>
    <div
      v-for="goodCart in goods"
      :key="goodCart.id"
      class="border-b-black mb-4 last:mb-0"
    >
      <CardCart
        :id="goodCart.good.id"
        :title="goodCart.good.title"
        :img="getPublicImageSrc(goodCart.good.mainPhoto?.path)"
        :count="goodCart.count"
        :vendor-code="goodCart.good.vendorCode"
        :price="goodCart.good.price"
        @update:count="(value) => updateCount(value, goodCart.id)"
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
  (e: "update:goodCount", value: GoodCart["count"], id: GoodCart["id"]): void;
}
interface CartGoodsProps {
  goods: GoodCart[];
}

const emits = defineEmits<CartGoodsEmits>();
defineProps<CartGoodsProps>();

function onDelete(id: number) {
  emits("delete", id);
}
function updateCount(value: GoodCart["count"], id: GoodCart["id"]) {
  emits("update:goodCount", value, id);
}
</script>

<style scoped></style>
