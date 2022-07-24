<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="props.type"
  >
    <path v-if="!props.isLonger" d="M41.9073 2.41895L38.4073 4.43967V0.398219L41.9073 2.41895ZM0.436523 2.06895L38.7573 2.06895V2.76895L0.436523 2.76895L0.436523 2.06895Z" fill="#564D42"/>
    <path v-else d="M83.9508 3.86034L78.9508 0.973593L78.9508 6.7471L83.9508 3.86034ZM0.985352 4.36035L79.4508 4.36034L79.4508 3.36034L0.985352 3.36035L0.985352 4.36035Z" fill="black"/>
  </svg>
</template>

<script setup lang="ts">
interface ArrowLongProps {
  type?: 'left' | 'right',
  isLonger?: boolean,
}

const props = withDefaults(
  defineProps<ArrowLongProps>(),
  {
    type: 'right',
  },
);

const width = computed(() => props.isLonger ? '84' : '42');
const height = computed(() => props.isLonger ? '7' : '5');

</script>

<style lang="scss" scoped>
.left {
  transform: rotate(180deg);
}
</style>
