<template>
  <div v-bind="$attrs" class="flex">
    <div class="mr-12">
      <img width="152" height="146" :src="img" />
    </div>
    <div class="flex-1">
      <div class="mb-6">
        <BaseTypography tag="h3" type="title4">{{ title }}</BaseTypography>
        <div class="text-regular-2 text-sm font-light">
          Артикул: {{ vendorCode }}
        </div>
      </div>
      <div class="text-sm">Наличие: 1 шт.</div>
    </div>

    <div class="pl-4 pr-4">Кол - {{ count }}</div>
    <div class="pl-4 pr-4">
      <div class="text-xl">{{ priceValue }}</div>
    </div>
    <div class="pl-4">
      <div class="mb-6">
        <div
          class="bg-[url(@/assets/images/icons/like.svg)] bg-no-repeat bg-contain bg-center transition-[background-image] cursor-pointer w-[26px] h-[24px] hover:bg-[url(@/assets/images/icons/like-fill.svg)]"
          :class="{ 'bg-[url(@/assets/images/icons/like-fill.svg)]': favorite }"
        />
      </div>
      <div>
        <BaseIconWrapper @click="onDeleteGood">
          <BaseIconDelete />
        </BaseIconWrapper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CartEmits {
  (e: "delete"): void;
}
interface CartProps {
  img: string;
  title: string;
  count: number;
  vendorCode: string;
  price: number;
  favorite?: boolean;
}

const emits = defineEmits<CartEmits>();
const props = withDefaults(defineProps<CartProps>(), { favorite: false });

const priceValue = computed(() =>
  new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB" }).format(
    props.price
  )
);

function onDeleteGood() {
  emits("delete");
}
</script>

<style scoped></style>
