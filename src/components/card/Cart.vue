<template>
  <div v-bind="$attrs" class="flex">
    <div class="mr-12">
      <img width="152" height="146" :src="img" />
    </div>
    <div>
      <BaseTypography tag="h3" type="title4">{{ title }}</BaseTypography>
      Кол-во: {{ count }}
      <div>
        <div>Артикул: 640022</div>
        <div>Дизайн Кристофер Холл</div>
      </div>
      <div>Наличие: 1</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CartProps {
  img: string;
  title: string;
  count: number;
}

defineProps<CartProps>();
</script>

<style scoped></style>
