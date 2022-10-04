<template>
  <div
    class="pb-8 pt-8 border-t border-b border-t-regular-1 border-b-regular-1"
  >
    <div>
      <div class="flex items-center justify-between mb-5">
        <div>Вес заказа</div>
        <div>{{ weight }} кг</div>
      </div>
      <div class="flex items-center justify-between mb-10">
        <div>{{ countGoodsText }}</div>
        <div>{{ rubFormat(totalPrice) }}</div>
      </div>

      <div
        class="flex items-center justify-between mb-10 text-2xl font-semibold"
      >
        <div>Итого</div>
        <div>{{ rubFormat(totalPrice) }}</div>
      </div>

      <div v-if="showBtn" class="flex justify-center items-center">
        <BaseButton title="Перейти к оформлению" @click="onClickBtn" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { rubFormat } from "~~/src/utils/priceFormat";

interface DraftEmits {
  (e: "btnClick"): void;
}
interface DraftProps {
  weight: number;
  countGoods: number;
  totalPrice: number;
  showBtn: boolean;
}
const props = withDefaults(defineProps<DraftProps>(), {
  showBtn: true,
});
const emits = defineEmits<DraftEmits>();

const countGoodsText = computed(() => {
  let text = "товара";

  if (props.countGoods === 1) {
    text = "товар";
  }

  return `${props.countGoods} ${text}`;
});

function onClickBtn() {
  emits("btnClick");
}
</script>

<style scoped></style>
