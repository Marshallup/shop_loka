<template>
  <div
    class="
      container
      mx-auto
    "
    :class="paddingClass"
  >
    <div
      :class="removeSideClass"
    >
      <slot />
    </div>
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
});
const removeSideClass = computed(() => {
  switch(props.removeSide) {
    case 'left':
      return '';
    case 'right':
      // return 'ml-[max(0px_,0px)]';
      return '';
    default:
      return '';
  }
});

</script>

<style scoped>

</style>
