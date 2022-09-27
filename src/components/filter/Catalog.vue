<template>
  <div class="mb-11">
    <CatalogListTitle :title="title" :count="count">
      <div>
        <DropdownSimple
          v-model="value"
          :data="dropdownData"
          dropdown-class="min-h-[250px]"
        />
      </div>
    </CatalogListTitle>
  </div>
</template>

<script setup lang="ts">
import { SimpleData, FilterValue } from "@/types/components/dropdownSimple";

interface CatalogProps {
  modelValue: FilterValue;
  title: string;
  count: number;
  dropdownData: SimpleData;
}
interface CatalogEmits {
  (e: "update:modelValue", value: CatalogProps["modelValue"]): void;
}
const props = withDefaults(defineProps<CatalogProps>(), {
  title: "",
  count: 0,
});
const emit = defineEmits<CatalogEmits>();

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>

<style scoped></style>
