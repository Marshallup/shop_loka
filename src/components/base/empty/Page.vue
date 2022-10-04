<template>
  <div>
    <BaseTypography tag="title2" class="text-center mb-5">
      {{ title }}
    </BaseTypography>
    <div class="flex justify-center">
      <component :is="component" :to="link ? link : null">
        <BaseButton :title="btnText" :class="{ 'cursor-default': !link }" />
      </component>
    </div>
  </div>
</template>

<script setup lang="ts">
interface EmptyPageProps {
  title: string;
  link?: string;
  btnText: string;
}

const props = withDefaults(defineProps<EmptyPageProps>(), {
  link: "",
});

const component = computed(() =>
  props.link ? resolveComponent("NuxtLink") : "div"
);
</script>

<style scoped></style>
