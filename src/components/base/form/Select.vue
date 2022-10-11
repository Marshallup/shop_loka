<template>
  <div class="w-full h-full">
    <div
      ref="selectRef"
      class="relative border-regular-3 border rounded-[40px] pt-2 pb-2 pl-3 pr-3"
    >
      <div @click="onSelectClick">
        <div
          class="relative flex cursor-pointer"
          :class="{ 'h-[28px]': size === 'sm' }"
        >
          <span
            class="flex items-center justify-center h-full pr-4"
            :class="{ 'min-w-[61px] text-sm': size === 'sm' }"
            >{{ value }}</span
          >
          <input
            v-if="withSearch"
            class="outline-0 bg-transparent w-full h-full"
            :class="{ 'text-sm': size === 'sm' }"
            v-model="inputValue"
          />
        </div>
        <div
          class="absolute top-[16px] right-[13px] cursor-pointer"
          @click="onChevronClick"
        >
          <BaseIconChevronDown />
        </div>
      </div>

      <Transition name="fade">
        <div
          v-if="isShowOptions"
          class="absolute left-0 top-full min-w-full bg-regular-1 text-white translate-y-0.5"
        >
          <ul class="pt-2 pb-2 text-sm">
            <li
              v-if="!options.length"
              class="pl-2 pr-2 pt-1 pb-1 cursor-default"
            >
              Нет значений
            </li>
            <li
              v-for="option in options"
              class="pl-2 pr-2 pt-1 pb-1 mb-2 last:mb-0 cursor-pointer"
              @click="onClickOption(option.value)"
            >
              {{ option.label }}
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { Options, Option } from "~~/src/types/components/baseFormSelect";

interface SelectProps {
  modelValue: string | number;
  size?: "sm" | "md" | "lg";
  withSearch?: boolean;
  options?: Options;
}
interface SelectEmits {
  (e: "update:modelValue", v: SelectProps["modelValue"]): void;
}

const emits = defineEmits<SelectEmits>();
const props = withDefaults(defineProps<SelectProps>(), {
  size: () => "sm",
  withSearch: () => false,
  options: () => [],
});

const value = computed({
  get: () => props.modelValue,
  set: (val) => emits("update:modelValue", val),
});
const selectRef = ref<HTMLDivElement | null>(null);
const inputValue = ref("");
const isShowOptions = ref(false);

function hideOptions() {
  isShowOptions.value = false;
}
function showOptions() {
  isShowOptions.value = true;
}
function onSelectClick() {
  if (unref(isShowOptions)) {
    hideOptions();
  } else {
    showOptions();
  }
}
function onChevronClick() {
  console.log("chevron click");
}
function onClickOption(val: Option["value"]) {
  if (unref(value) !== val) {
    value.value = val;
    hideOptions();
  }
}

onClickOutside(selectRef, hideOptions);
</script>

<style scoped></style>
