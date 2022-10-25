<template>
  <header class="pt-5 pb-5 absolute w-full">
    <BaseContainer>
      <div class="flex items-center justify-between">
        <BaseBurger />
        <BaseLineHorizontal class="ml-4 mr-8" />
        <HeaderLogo />
        <BaseLineHorizontal class="ml-8 mr-4" />
        <NuxtLink v-if="authToken" to="/cart">
          <div class="flex items-center">
            <div class="mr-[11px]">Bag</div>
            <div
              class="min-w-[33px] min-h-[33px] border-[0.5px] border-textMain rounded-full flex items-center justify-center"
            >
              <span>{{ countGoods }}</span>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink v-else to="/login">
          <AccountIcon />
        </NuxtLink>
      </div>
    </BaseContainer>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from "~~/src/store/auth/auth";
import { useCartStore } from "~~/src/store/cart/cart";
import AccountIcon from "vue-material-design-icons/Account.vue";

const cartStore = useCartStore();
const authStore = useAuthStore();

const countGoods = computed(() => cartStore.countGoods);
const authToken = computed(() => authStore.token);
</script>

<style scoped></style>
