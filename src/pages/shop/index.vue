<template>
  <div>
    <BaseHeaderSpace />
    <div class="mb-8">
      <CatalogList :goods="goods" :caregories="categories" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FetchCategories } from "~~/src/services/categories";
import { FetchGoods } from "~~/src/services/goods";

const { getPublicImageSrc } = useImage();
const { data: goods } = await FetchGoods.getAll();
const { data: categories } = await FetchCategories.getAll();
</script>

<style scoped></style>
