<template>
  <div :style="{ maxWidth }">
    <BaseTypography tag="div" type="title5" class="mb-6"
      >Ваши данные</BaseTypography
    >
    <div class="mb-8">
      <TableCartOrderRow v-for="row in tableRows" :key="row.title">
        <TableCartOrderCol regular>{{ row.title }}</TableCartOrderCol>
        <TableCartOrderCol>{{ row.text }}</TableCartOrderCol>
      </TableCartOrderRow>
    </div>

    <div class="flex items-center justify-between">
      <BaseButton title="Изменить данные" dir="left" @click="onChangeData" />
      <BaseButton title="Заказать" @click="onInitOrder" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ITableRow } from "@/types/components/tableCheckout";

interface CartOrderProps {
  maxWidth?: string;
  tableRows: ITableRow[];
}
interface CartOrderEmits {
  (e: "changeData"): void;
  (e: "initOrder"): void;
}

withDefaults(defineProps<CartOrderProps>(), {
  maxWidth: "500px",
  tableRow: () => [],
});

const emits = defineEmits<CartOrderEmits>();

function onChangeData() {
  emits("changeData");
}
function onInitOrder() {
  emits("initOrder");
}
</script>

<style scoped></style>
