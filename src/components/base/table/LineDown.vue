<template>
  <div>
    <div v-if="props.title">
      <BaseTypography tag="title3">
        {{ props.title }}
      </BaseTypography>
    </div>
    <div>
      <div
        v-for="row in props.data"
        :key="row.id"
        class="border-black border-b-2 pb-4 mb-3 last:mb-0"
      >
        <div class="flex justify-between text-sm">
          <div>
            {{ firstUppercase(row.title) }}
          </div>
          <div>
            {{ row.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { firstUppercase } from "~~/src/utils/helpers";

interface BaseTableLineDownProps {
  title?: string;
  data: {
    id: string | number;
    title: string;
    content: string;
  }[];
}

const props = defineProps<BaseTableLineDownProps>();
</script>

<style scoped></style>
