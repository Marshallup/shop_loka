import { defineStore } from "pinia"
import { GoodCart, FormCheckoutValues } from "./types";
import { Good } from "../../domain/good";
import { CART_STEPS } from "./enums";
import { getUniqID } from "~~/src/utils/helpers";

function getInitCheckoutValues(): FormCheckoutValues {
  return {
    name: "",
    surname: "",
    email: "",
    phone: null,
    country: "",
    city: "",
    index: "",
    address: "",
    comment: "",
  }
}

export const useCartStore = defineStore('cart', () => {
  const goods = ref<GoodCart[]>([]);
  const countGoods = computed(() => unref(goods).reduce((prev, cur) => prev + cur.count, 0));
  const totalPrice = computed(() => unref(goods).reduce((prev, cur) => prev + cur.count * cur.good.price, 0));
  const cartStep = ref(CART_STEPS.CHANGE_ORDER_STEP);
  const checkoutValues = ref(getInitCheckoutValues());

  function nextStep() {
    cartStep.value += 1;
  }

  function prevStep() {
    cartStep.value -= 1;
  }

  function setStep(step: CART_STEPS) {
    cartStep.value = step;
  }

  function incCountGood(idx: number, count = 1) {
    const good = unref(goods)[idx];

    if (good) {
      good.count += count;
    }
  }

  function decCountGood(idx: number, count = 1) {
    const good = unref(goods)[idx];

    if (good) {
      good.count -= count;
    }
  }

  function addGood(good: Good, count = 1) {
    const goodCartIdx = unref(goods).findIndex(goodItem => goodItem.good.id === good.id);

    if (goodCartIdx !== -1) {
      incCountGood(goodCartIdx, count);
    } else {
      goods.value.push({
        id: 1,
        good,
        count: 1,
      })
    }
  }

  function getGoods() {
    return unref(goods).map(({ count, good }) => ({
      id: getUniqID(),
      good,
      count,
    }));
  }

  function removeGood(goodID: number) {
    const goodIdx = unref(goods).findIndex(goodItem => goodItem.id === goodID);

    if (goodIdx > -1) {
      goods.value.splice(goodIdx, 1);
    }
  }

  function setGoodCount(count: GoodCart["count"], id: GoodCart["id"]) {
    const goodIdx = unref(goods).findIndex(goodItem => goodItem.id === id);

    if (goodIdx > -1 && unref(goods)[goodIdx].count !== count) {
      goods.value[goodIdx].count = count;
    }
  }

  function resetCart() {
    goods.value = [];
    cartStep.value = CART_STEPS.CHANGE_ORDER_STEP;
    checkoutValues.value = getInitCheckoutValues();

  }

  return {
    checkoutValues,
    cartStep,
    goods,
    countGoods,
    totalPrice,
    getGoods,
    incCountGood,
    decCountGood,
    addGood,
    removeGood,
    setGoodCount,
    nextStep,
    prevStep,
    setStep,
    resetCart,
  }
})