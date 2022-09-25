<template>
  <div class="relative min-w-[150px]">
    <div class="mb-2 text-black cursor-pointer" @click="onClickCurLabel">
      {{ currentLabel }}
    </div>

    <Transition name="fade">
      <div
        v-if="dropdownShow"
        ref="dropdownRef"
        class="absolute min-w-full text-sm text-white bg-regular-1 pt-8 pb-5"
        :class="dropdownClass"
      >
        <div
          class="absolute text-white top-[10px] right-[11px] cursor-pointer"
          @click="onClickClose"
        >
          <BaseIconClose />
        </div>
        <ul>
          <li
            v-for="item in data"
            :key="item.value"
            class="mb-2 pl-5 pr-5"
            :class="{
              'cursor-pointer': item.value !== value,
              'cursor-default': item.value === value,
            }"
            @click="onClickDropdownItem(item.value)"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

interface SimpleItem {
  value: any;
  label: string;
}
interface Simple {
  modelValue: any;
  data?: SimpleItem[];
  dropdownClass: string;
}
interface SimpleEmit {
  (e: "update:modelValue", value: Simple["modelValue"]): void;
}

const props = withDefaults(defineProps<Simple>(), {
  data: () => [],
  dropdownClass: "",
});
const emit = defineEmits<SimpleEmit>();

const dropdownRef = ref<HTMLDivElement | null>(null);
const value = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
const currentLabel = computed(
  () => props.data.find((item) => item.value === unref(value))?.label
);
const dropdownShow = ref(false);

function onClickCurLabel() {
  dropdownShow.value = !unref(dropdownShow);
}
function closeDropdown() {
  dropdownShow.value = false;
}
function onClickClose() {
  closeDropdown();
}
function onClickDropdownItem(itemValue: SimpleItem["value"]) {
  if (unref(value) !== itemValue) {
    value.value = itemValue;
    closeDropdown();
  }
}

onClickOutside(dropdownRef, closeDropdown);
</script>
<style lang="scss" scoped></style>
