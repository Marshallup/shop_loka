<template>
  <div
    class="
      container
      mx-auto
    "
    :class="paddingClass"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface BaseContainerProps {
  removeSide?: 'left' | 'right',
}

const props = defineProps<BaseContainerProps>();

const paddingClass = computed(() => {
  switch(props.removeSide) {
    case 'left':
      return 'pr-12';
    case 'right':
      return 'pl-12';
    default:
      return 'px-12';
  }
})

</script>

<style scoped>

</style>
