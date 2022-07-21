<template>
  <svg
    width="42"
    height="5"
    viewBox="0 0 42 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="props.type"
  >
    <path d="M41.9073 2.41895L38.4073 4.43967V0.398219L41.9073 2.41895ZM0.436523 2.06895L38.7573 2.06895V2.76895L0.436523 2.76895L0.436523 2.06895Z" fill="#564D42"/>
  </svg>
</template>

<script setup lang="ts">
interface ArrowLongProps {
  type?: 'left' | 'right',
}

const props = withDefaults(
  defineProps<ArrowLongProps>(),
  {
    type: 'right',
  },
);

</script>

<style lang="scss" scoped>
.left {
  transform: rotate(180deg);
}
</style>
