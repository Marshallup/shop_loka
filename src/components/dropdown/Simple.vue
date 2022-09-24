<template>
  <div class="relative min-w-[150px]">
    <div>{{ currentLabel }}</div>

    <!-- <teleport to="body"> -->
    <div class="absolute min-w-full text-sm text-white bg-regular-1 pt-8 pb-5">
      <div class="absolute text-white top-[10px] right-[11px] cursor-pointer">
        <BaseIconClose />
      </div>
      <ul>
        <li class="mb-2 pl-5 pr-5">for face</li>
        <li>for body</li>
      </ul>
    </div>
    <!-- </teleport> -->
  </div>
</template>

<script setup lang="ts">
interface SimpleItem {
  value: any;
  label: string;
}
interface Simple {
  modelValue: any;
  data?: SimpleItem[];
}
interface SimpleEmit {
  (e: "update:modelValue", value: Simple["modelValue"]): void;
}

const props = withDefaults(defineProps<Simple>(), {
  data: () => [],
});
const emit = defineEmits<SimpleEmit>();

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
const currentLabel = computed(
  () => props.data.find((item) => item.value === unref(value))?.label
);
</script>
<style scoped></style>
