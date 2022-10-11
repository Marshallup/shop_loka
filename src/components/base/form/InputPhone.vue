<template>
  <BaseFormInput
    v-model="innerValue"
    v-maska="maska"
    :placeholder="placeholder"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
interface InputPhoneProps {
  modelValue: number | null;
  placeholder?: string;
  type?: "mobile";
}
interface InputPhoneEmits {
  (e: "update:modelValue", val: InputPhoneProps["modelValue"]): void;
}

const props = withDefaults(defineProps<InputPhoneProps>(), {
  type: "mobile",
});
const emit = defineEmits<InputPhoneEmits>();

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
const innerValue = ref(unref(value) === null ? null : String(unref(value)));

const maska = computed(() => {
  switch (props.type) {
    case "mobile":
      return "+7 (###)-### ## ##";
    default:
      return null;
  }
});

const placeholder = computed(() => {
  if (props.placeholder) {
    return props.placeholder;
  }

  switch (props.type) {
    case "mobile":
      return "+7 (999)-999 99 99";
    default:
      return props.placeholder;
  }
});

watch(innerValue, (innerVal) => {
  if (!innerVal) {
    value.value = null;
  } else {
    const numberVal = +innerVal.replace(/[^0-9]/g, "");

    if (!isNaN(numberVal)) {
      value.value = numberVal;
    }
  }
});
</script>

<style scoped></style>
