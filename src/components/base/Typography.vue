<template>
  <component :is="tag" v-bind="$attrs" :class="[tagClasses, typeClasses]">
    <slot />
  </component>
</template>

<script setup lang="ts">
interface TypographyProps {
  tag?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "div"
    | "title3"
    | "title2"
    | "title1";
  type?: "title2" | "title4";
}

const props = withDefaults(defineProps<TypographyProps>(), {
  tag: "p",
});

const tag = computed(() => {
  switch (props.tag) {
    case "title3":
    case "title2":
    case "title1":
      return "div";
    default:
      return props.tag;
  }
});

const tagClasses = computed(() => {
  switch (props.tag) {
    case "h1":
      return "text-6xl";
    case "title1":
      return "text-title1 uppercase";
    case "title2":
      return "uppercase text-title2";
    case "title3":
      return "uppercase leading-[20px] mb-6";
  }
});

const typeClasses = computed(() => {
  switch (props.type) {
    case "title2":
      return "uppercase text-title2";
    case "title4":
      return "text-2xl";
    default:
      return "";
  }
});
</script>

<style scoped></style>
