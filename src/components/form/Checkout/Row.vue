<template>
  <div
    class="pb-10"
    :class="{ 'border-b border-b-regular-2': !disableBottomLine }"
  >
    <div v-if="title" class="text-2xl mb-5 font-semibold">{{ title }}</div>

    <div class="flex">
      <div
        :class="{
          'basis-full': !slots['input-2'],
          'basis-1/2 mr-6': slots['input-2'],
        }"
      >
        <slot name="input-1" />
      </div>
      <div v-if="slots['input-2']" class="basis-1/2">
        <slot name="input-2" />
      </div>
    </div>

    <div v-if="slots['input-3'] || slots['input-4']" class="flex mt-6">
      <div v-if="slots['input-3']" class="basis-1/2 mr-6">
        <slot name="input-3" />
      </div>
      <div v-if="slots['input-4']" class="basis-1/2">
        <slot name="input-4" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface RowProps {
  title?: string;
  disableBottomLine?: boolean;
}

defineProps<RowProps>();

const slots = useSlots();
</script>

<style scoped></style>
