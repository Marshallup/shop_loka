<template>
  <div class="flex-1" :class="{ 'text-regular-2': regular }">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface ColProps {
  regular?: boolean;
}

withDefaults(defineProps<ColProps>(), {
  regular: false,
});
</script>

<style scoped></style>
