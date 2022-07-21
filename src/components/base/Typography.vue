<template>
  <component
    :is="props.tag"
    :class="tagClasses"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">

interface TypographyProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p',
}

const props = withDefaults(
  defineProps<TypographyProps>(),
  {
    tag: 'p'
  }
);

const tagClasses = computed(() => {
  switch(props.tag) {
    case 'h1':
      return 'text-6xl';
  }
})
</script>

<style scoped>

</style>
