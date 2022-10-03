<template>
  <div>
    <BaseHeaderSpace />
    <BaseContainer>
      <div class="flex">
        <div class="flex-1 mr-20">
          <div class="mb-16">
            <BaseTypography tag="h1" type="title2"> Корзина </BaseTypography>
          </div>

          <div>
            <CardCart
              title="test"
              vendor-code="123-asdas-32"
              :price="3466"
              :count="15"
              img="/"
            />
            <ListCartGoods :goods="goods" @delete="onDeleteGoodCart" />
          </div>
        </div>
        <div class="w-[424px] max-w-full">
          <BaseTypography tag="div" type="title2"> Итого: </BaseTypography>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/store/cart";

const cartStore = useCartStore();

const goods = computed(() => cartStore.goods);

function onDeleteGoodCart(id: number) {
  cartStore.removeGood(id);
}
</script>

<style scoped></style>
