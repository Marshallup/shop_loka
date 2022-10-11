<template>
  <div
    class="last:mb-0"
    :class="{
      'border-b border-b-regular-2': !disableBottomLine && !subRow,
      'pb-10 mb-6': !subRow,
      'w-full mb-7': subRow,
    }"
  >
    <BaseTypography v-if="title" tag="div" type="title5">{{
      title
    }}</BaseTypography>

    <div class="flex" :class="{ 'flex-wrap': wrap }">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface RowProps {
  title?: string;
  disableBottomLine?: boolean;
  subRow?: boolean;
  wrap?: boolean;
}

defineProps<RowProps>();

const slots = useSlots();
</script>

<style scoped></style>
