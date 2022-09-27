<template>
  <BaseContainer>
    <div
      class="flex items-center"
      :class="{ 'justify-between': !!title, 'justify-end': !title }"
    >
      <div v-if="title" class="relative text-black">
        <h5 class="font-newYork text-6xl pr-5">
          {{ firstUppercase(title) }}
        </h5>
        <span class="absolute text-sm font-normal top-0 right-0">
          ({{ count }})
        </span>
      </div>

      <slot />
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
import { firstUppercase } from "~~/src/utils/helpers";

interface ListTitleProps {
  title: string;
  count: number;
}

defineProps<ListTitleProps>();
</script>

<style scoped></style>
