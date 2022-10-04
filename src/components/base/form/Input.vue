<template>
  <div class="w-full">
    <label v-if="label" class="block text-sm mb-2" :for="id"
      >{{ label }}<sup v-if="required">*</sup></label
    >
    <input
      class="w-full border-regular-3 border text-sm pl-2 pr-2 pt-3 pb-3 outline-0 bg-transparent text-regular-1"
      :placeholder="placeholder"
      :id="id"
    />
  </div>
</template>

<script setup lang="ts">
import { getUniqID } from "~~/src/utils/helpers";

interface InputProps {
  label?: string;
  required?: boolean;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
}

const props = withDefaults(defineProps<InputProps>(), {
  required: false,
  size: "md",
});

const id = ref(`${getUniqID()}_input`);
</script>

<style scoped></style>
