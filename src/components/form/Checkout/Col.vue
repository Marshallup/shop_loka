<template>
  <div
    class="last:mr-0"
    :class="{
      'basis-full': width === 'full',
      'basis-1/2 mr-6': width === 'half',
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface ColProps {
  width?: "full" | "half";
}

withDefaults(defineProps<ColProps>(), {
  width: () => "half",
});
</script>

<style scoped></style>
