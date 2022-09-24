<template>
  <div
    class="flex items-center justify-center pt-[60px] pb-[150px]"
    :title="title"
  >
    <div>
      <NuxtLink :to="link">
        <img :src="src" :alt="title" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CatalogProps {
  src?: string;
  link: string;
  title: string;
}
withDefaults(defineProps<CatalogProps>(), {
  src: "/shop/body/1.png",
  link: "#",
  title: "title image",
});
</script>

<style scoped></style>
