<template>
  <div class="mt-10">
    <BaseHeaderSpace />
    <BaseContainer>
      <!-- <TableCartOrder :table-rows="[{ title: 'w', text: 'ee' }]" /> -->
      <!-- <FormCheckout /> -->

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
            <FormCheckout
              :init-values="checkoutValues"
              @submit="onSubmitCheckout"
              @change-order="onChangeOrder"
            />
          </div>
          <div v-else-if="isShowOrderDataStep">
            <TableCartOrder
              :table-rows="tableCardOrderData"
              @change-data="cartStore.prevStep"
              @init-order="onInitOrder"
            />
          </div>
        </div>
        <div class="w-[424px] max-w-full">
          <div v-if="!isProcessedOrder">
            <div class="mb-16">
              <BaseTypography tag="div" type="title2"> Итого: </BaseTypography>
            </div>

            <div class="sticky top-[50px]">
              <CardDraft
                :weight="20"
                :count-goods="countGoods"
                :total-price="totalPrice"
                :show-btn="isCartStep"
                @btn-click="cartStore.nextStep"
              />
            </div>
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
import { FormCheckoutValues } from "@/store/cart";
import { ITableRow } from "@/types/components/tableCheckout";
import { CART_STEPS } from "@/store/cart/enums";

const cartStore = useCartStore();

const goods = computed(() => cartStore.goods);
const totalPrice = computed(() => cartStore.totalPrice);
const countGoods = computed(() => cartStore.countGoods);

const isCartStep = computed(
  () => unref(cartStore).cartStep === CART_STEPS.CHANGE_ORDER_STEP
);
const isCheckoutStep = computed(
  () => unref(cartStore).cartStep === CART_STEPS.FORM_STEP
);
const isShowOrderDataStep = computed(
  () => unref(cartStore).cartStep === CART_STEPS.CLIENT_DATA_STEP
);
const isProcessedOrder = computed(
  () => unref(cartStore).cartStep === CART_STEPS.PROCESSED_ORDER
);

const checkoutValues = computed({
  get: () => cartStore.checkoutValues,
  set: (val) => (cartStore.checkoutValues = val),
});

const tableCardOrderData = computed<ITableRow[]>(() => {
  const values = unref(checkoutValues);

  const createTableRow = <T, T2>(title: string, text: T2) => ({
    title,
    text,
  });

  return [
    createTableRow("Имя", values.name),
    createTableRow("Фамилия", values.surname),
    createTableRow("Email", values.email),
    createTableRow("Телефон", String(values.phone)),
    createTableRow("Страна", values.country),
    createTableRow("Город", values.city),
    createTableRow("Почтовый индекс", values.index),
    createTableRow("Адрес", values.address),
    createTableRow("Комментарий", values.comment || "-"),
  ];
});

const leftTitle = computed(() => {
  if (unref(isCartStep)) {
    return "Корзина";
  } else if (unref(isCheckoutStep)) {
    return "Оформление заказа";
  } else if (unref(isShowOrderDataStep)) {
    return "Все верно ?";
  } else if (unref(isProcessedOrder)) {
    return "Заказ оформлен";
  }

  return "";
});

function onDeleteGoodCart(id: number) {
  cartStore.removeGood(id);
}
function onUpdateGoodCount(value: GoodCart["count"], id: GoodCart["id"]) {
  cartStore.setGoodCount(value, id);
}
function onInitOrder() {
  console.log("onInitOrder");
}
function onSubmitCheckout(values: FormCheckoutValues) {
  checkoutValues.value = values;
  cartStore.nextStep();
}
function onChangeOrder() {
  cartStore.prevStep();
}
</script>

<style scoped></style>
