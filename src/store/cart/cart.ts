import { defineStore } from "pinia"
import { GoodCart } from "./types";
import { Good } from "../../domain/good";

export const useCartStore = defineStore('cart', () => {
  const goods = ref<GoodCart[]>([]);
  const countGoods = computed(() => unref(goods).reduce((prev, cur) => prev + cur.count, 0));

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

  function removeGood(goodID: number) {
    const goodIdx = unref(goods).findIndex(goodItem => goodItem.id === goodID);

    if (goodIdx > -1) {
      goods.value.splice(goodIdx, 1);
    }
  }

  return {
    goods,
    countGoods,
    incCountGood,
    decCountGood,
    addGood,
    removeGood,
  }
})