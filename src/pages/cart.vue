<template>
  <div class="mt-10">
    <BaseHeaderSpace />
    <BaseContainer>
      <FormCheckout />

      <div v-if="goods.length" class="flex">
        <div class="flex-1 mr-20">
          <div class="mb-16">
            <BaseTypography tag="h1" type="title2">
              {{ leftTitle }}
            </BaseTypography>
          </div>

          <div v-if="isCartStep">
            <ListCartGoods
              :goods="goods"
              @delete="onDeleteGoodCart"
              @update:good-count="onUpdateGoodCount"
            />
          </div>
          <div v-else-if="isCheckoutStep">
            <FormCheckout />
          </div>
        </div>
        <div class="w-[424px] max-w-full">
          <div class="mb-16">
            <BaseTypography tag="div" type="title2"> Итого: </BaseTypography>
          </div>

          <div class="sticky top-[50px]">
            <CardDraft
              :weight="20"
              :count-goods="countGoods"
              :total-price="totalPrice"
              :show-btn="isCartStep"
              @btn-click="onCheckoutInit"
            />
          </div>
        </div>
      </div>

      <BaseEmptyPage
        v-else
        class="mt-10"
        title="В корзине нет товаров"
        btn-text="Добавить товары"
        link="/shop"
      />
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import { GoodCart, useCartStore } from "@/store/cart";

const cartStore = useCartStore();

const goods = computed(() => cartStore.goods);
const totalPrice = computed(() => cartStore.totalPrice);
const countGoods = computed(() => cartStore.countGoods);

const curStep = ref<1 | 2 | 3>(1);
const isCartStep = computed(() => unref(curStep) === 1);
const isCheckoutStep = computed(() => unref(curStep) === 2);

const leftTitle = computed(() => {
  if (unref(isCartStep)) {
    return "Корзина";
  } else if (unref(isCheckoutStep)) {
    return "Оформление заказа";
  }

  return "";
});

function onDeleteGoodCart(id: number) {
  cartStore.removeGood(id);
}
function onUpdateGoodCount(value: GoodCart["count"], id: GoodCart["id"]) {
  cartStore.setGoodCount(value, id);
}
function onCheckoutInit() {
  curStep.value = 2;
}
</script>

<style scoped></style>
