<script setup lang="ts">
import { GoodCart, useCartStore } from "@/store/cart";
import { useOrdersStore } from "@/store/orders";
import { FormCheckoutValues } from "@/store/cart";
import { ITableRow } from "@/types/components/tableCheckout";
import { CART_STEPS } from "@/store/cart/enums";
import { rubFormat } from "../utils/priceFormat";

const cartStore = useCartStore();
const ordersStore = useOrdersStore();

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
const isProcessedOrder = ref(false);

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
  if (unref(isProcessedOrder)) {
    return "Заказ оформлен";
  }

  if (unref(isCartStep)) {
    return "Корзина";
  } else if (unref(isCheckoutStep)) {
    return "Оформление заказа";
  } else if (unref(isShowOrderDataStep)) {
    return "Все верно ?";
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
  isProcessedOrder.value = true;
  ordersStore.addOrder(1, cartStore.getGoods());
  cartStore.resetCart();
  ordersStore.setCurrentOrderID(1);
}
function onSubmitCheckout(values: FormCheckoutValues) {
  checkoutValues.value = values;
  cartStore.nextStep();
}
function onChangeOrder() {
  cartStore.prevStep();
}

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="mt-10">
    <BaseHeaderSpace />
    <BaseContainer>
      <div v-if="goods.length || isProcessedOrder" class="flex">
        <div class="flex-1 mr-20">
          <div class="mb-16">
            <BaseTypography tag="h1" type="title2">
              {{ leftTitle }}
            </BaseTypography>
          </div>

          <div v-if="isProcessedOrder">
            <div class="max-w-[450px]">
              <BaseTypography tag="title3" class="font-semibold mb-10">
                Ваш заказ №{{ ordersStore.currentOrderID }} от 17.06.2027 16:22
                создан
              </BaseTypography>

              <div class="flex items-center justify-between">
                <BaseTypography tag="div" type="title5"
                  >Сумма к оплате:</BaseTypography
                >
                <BaseTypography tag="div" type="title5">{{
                  rubFormat(ordersStore.generalPrice)
                }}</BaseTypography>
              </div>
            </div>
          </div>

          <div v-else>
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
        </div>
        <div
          class="max-w-full"
          :class="{
            'w-[424px]': !isProcessedOrder,
            'w-[600px]': isProcessedOrder,
          }"
        >
          <div v-if="!isProcessedOrder" class="h-full">
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

          <div v-else>
            <ListOrder />
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

<style scoped></style>
