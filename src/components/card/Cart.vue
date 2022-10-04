<template>
  <div v-bind="$attrs" class="flex">
    <div class="mr-12">
      <img width="152" height="146" :src="img" />
    </div>
    <div class="flex-1">
      <div class="mb-6">
        <NuxtLink :to="`shop/${id}`">
          <BaseTypography tag="h3" type="title4">{{ title }}</BaseTypography>
        </NuxtLink>
        <div class="text-regular-2 text-sm font-light">
          Артикул: {{ vendorCode }}
        </div>
      </div>
      <div class="text-sm">Наличие: 1 шт.</div>
    </div>

    <div class="pl-4 pr-4">
      <BaseFormSelect
        v-model="countValue"
        :options="[{ value: 1, label: 1 }]"
      />
    </div>
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
import { rubFormat } from "@/utils/priceFormat";

interface CartProps {
  id: number;
  img: string;
  title: string;
  count: number;
  vendorCode: string;
  price: number;
  favorite?: boolean;
}
interface CartEmits {
  (e: "delete"): void;
  (e: "update:count", v: CartProps["count"]): void;
}

const emits = defineEmits<CartEmits>();
const props = withDefaults(defineProps<CartProps>(), { favorite: false });

const priceValue = computed(() => rubFormat(props.price));
const countValue = computed({
  get: () => props.count,
  set: (val) => emits("update:count", val),
});

function onDeleteGood() {
  emits("delete");
}
</script>

<style scoped></style>
