<template>
  <div class="w-full relative">
    <label v-if="label" class="block text-sm mb-2" :for="id"
      >{{ label }}<sup v-if="required">*</sup></label
    >
    <input
      v-bind="$attrs"
      :value="value"
      class="w-full border-regular-3 border text-sm pl-2 pr-2 pt-3 pb-3 outline-0 bg-transparent text-regular-1 transition-colors"
      :class="{ 'border-regular-3': !error, 'border-red-500': error }"
      :placeholder="placeholder"
      :id="id"
      @input="onUpdateValue"
    />

    <Transition name="error-message">
      <div
        v-if="error"
        class="absolute top-full left-0 text-red-500 text-xs translate-y-2"
      >
        {{ error }}
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { Field } from "vee-validate";
import { getUniqID } from "~~/src/utils/helpers";

interface InputProps {
  modelValue?: string | number;
  label?: string;
  required?: boolean;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  error?: string;
  type?: "number" | "string";
}
interface InputEmits {
  (e: "update:modelValue", val: InputProps["modelValue"]): void;
}

const emit = defineEmits<InputEmits>();
const props = withDefaults(defineProps<InputProps>(), {
  required: false,
  size: "md",
  type: "string",
});

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
const id = ref(`${getUniqID()}_input`);

function onUpdateValue(event: Event) {
  const target = <HTMLInputElement>event.target;
  const val = target.value;

  switch (props.type) {
    // case "number":
    //   {
    //     if (!val) {
    //       value.value = null;
    //       console.log("null");
    //     } else {
    //       const numberVal = +val;

    //       if (!isNaN(numberVal)) {
    //         value.value = numberVal;
    //       }
    //     }

    //     console.log(value.value, "value");
    //   }
    //   break;
    default:
      value.value = val;
      break;
  }
}
</script>

<style scoped></style>
