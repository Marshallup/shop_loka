<template>
  <button class="flex items-center" v-bind="$attrs">
    <div v-if="props.title" class="mr-3 uppercase">
      {{ props.title }}
    </div>
    <div
      class="relative rounded-full border-[1px] border-textMain cursor-pointer"
      :class="`${buttonSizeClass} ${buttonMrClass} ${props.size}`"
    >
      <div
        v-if="isBigArrow"
        class="flex items-center uppercase tracking-[0.7em]"
      >
        <div class="mr-4">
          <slot />
        </div>
        <BaseIconArrow />
      </div>

      <div v-else>
        <div
          class="absolute top-1/2 -translate-y-1/2 flex items-center"
          :class="arrowPosClass"
        >
          <BaseIconArrowLong
            :class="isLeftDir ? 'rotate-180 mt-[0.5px]' : ''"
            :is-longer="isLgSize"
          />
        </div>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  title?: string;
  size?: "md" | "lg" | "sm" | "big";
  dir?: "left" | "right";
}

const props = withDefaults(defineProps<ButtonProps>(), {
  size: "md",
  dir: "right",
});

const isBigArrow = computed(() => {
  switch (props.size) {
    case "big":
      return true;
    default:
      return false;
  }
});

const isLgSize = computed(() => props.size === "lg");
const buttonSizeClass = computed<string>(() => {
  switch (props.size) {
    case "big":
      return "py-[115px] px-[67px]";
    case "lg":
      return "p-[65px]";
    case "sm":
      return "p-[24px]";
    default:
      return "p-[30px]";
  }
});
const buttonMrClass = computed<string>(() => {
  switch (props.dir) {
    case "left":
      switch (props.size) {
        case "big":
          return "";
        case "lg":
          return "mr-8";
        default:
          return "mr-5";
      }
    default:
      switch (props.size) {
        case "big":
          return "";
        case "lg":
          return "ml-8";
        default:
          return "ml-5";
      }
  }
});
const arrowPosClass = computed(() => {
  switch (props.dir) {
    case "left":
      return "right-0 translate-x-1/2";
    default:
      return "left-0 -translate-x-1/2";
  }
});
const isLeftDir = computed(() => props.dir === "left");
</script>

<style lang="scss" scoped>
.lg {
  margin-left: 40px;
}
</style>
