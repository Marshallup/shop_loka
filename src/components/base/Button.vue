<template>
  <button>
    <div
    class="
      relative
      rounded-full
      border-[1px]
      border-textMain
      cursor-pointer
    "
    :class="`${buttonSizeClass} ${buttonMrClass}`"
    >
    <div
      v-if="isBigArrow"
      class="
        flex
        items-center
        uppercase
        tracking-[0.7em]
      "
    >
      <div class="mr-4">
        <slot />
      </div>
        <BaseIconArrow />
      </div>

      <div v-else>
        <div
          class="
            absolute
            top-1/2
            -translate-y-1/2
            flex
            items-center
          "
          :class="arrowPosClass"
        >
          <BaseIconArrowLong
            :class="isLeftDir ? 'rotate-180 mt-[0.5px]' : ''"
          />
        </div>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  size?: 'md' | 'lg' | 'sm' | 'big',
  dir?: 'left' | 'right',
}

const props = withDefaults(
  defineProps<ButtonProps>(),
  {
    size: 'md',
    dir: 'right',
  }
);

const isBigArrow = computed(() => {
  switch(props.size) {
    case 'big':
      return true;
    default:
      return false;
  }
});

const buttonSizeClass = computed(() => {
  switch (props.size) {
    case 'big':
      return 'py-[115px] px-[67px]';
    case 'sm':
      return 'p-[24px]';
    default:
      return 'p-[30px]';
  }
});
const buttonMrClass = computed(() => {
  switch (props.size) {
    case 'big':
      return '';
    default:
      if (props.dir === 'left') {
        return 'mr-5';
      }

      return 'ml-5';

  }
});
const arrowPosClass = computed(() => {
  switch(props.dir) {
    case 'left':
      return 'right-0 translate-x-1/2';
    default:
      return 'left-0 -translate-x-1/2';
  }
});

const isLeftDir = computed(() => props.dir === 'left');
</script>

<style scoped>

</style>
