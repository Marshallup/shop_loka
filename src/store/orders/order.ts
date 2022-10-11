import { defineStore } from "pinia";
import { Good } from "~~/src/domain/good";
import { IOrder } from "./types";

export const useOrdersStore = defineStore('orders', () => {
  const orders = ref<IOrder[]>([]);

  function addOrder(id: number, goods: IOrder['goods']) {
    orders.value = [
      ...unref(orders),
      {
        id,
        goods,
      }
    ]
  }

  return {
    orders,
    addOrder,
  }
});
