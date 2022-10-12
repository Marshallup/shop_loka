import { defineStore } from "pinia";
import { IOrder } from "./types";

export const useOrdersStore = defineStore('orders', () => {
  const orders = ref<IOrder[]>([]);
  const currentOrderID = ref<IOrder['id']>(null);
  const currentOrder = computed(() => unref(orders).find(order => order.id === unref(currentOrderID)));
  const generalPrice = computed(() => {
    if (unref(currentOrder)) {
      return unref(currentOrder).goodsInfo.reduce((prev, cur) => prev + (cur.good.price * cur.count), 0);
    }

    return 0;
  })

  function addOrder(id: number, goodsInfo: IOrder['goodsInfo']) {
    orders.value = [
      ...unref(orders),
      {
        id,
        goodsInfo,
      }
    ]
  }

  function setCurrentOrderID(id: IOrder['id']) {
    currentOrderID.value = id;
  }

  return {
    generalPrice,
    currentOrderID,
    currentOrder,
    orders,
    addOrder,
    setCurrentOrderID,
  }
});
