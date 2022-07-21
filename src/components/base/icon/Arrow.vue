<template>
  <svg
    width="26"
    height="6"
    viewBox="0 0 26 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="props.type"
  >
    <path d="M25.6452 3.08105L20.6452 0.194302L20.6452 5.9678L25.6452 3.08105ZM0.5 3.58105L21.1452 3.58105L21.1452 2.58105L0.5 2.58105L0.5 3.58105Z" fill="#564D42"/>
  </svg>
</template>

<script setup lang="ts">
interface ArrowProps {
  type?: 'left' | 'right',
}

const props = withDefaults(
  defineProps<ArrowProps>(),
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
