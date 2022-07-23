<template>
  <div>
    <BaseHeaderSpace />
    <div class="mb-8">
      <CatalogList :data="data" />
    </div>
  </div>
</template>

<script setup lang="ts">
const data = ref([
  {
    id: '1',
    categoryTitle: 'Body',
    countGoods: 4,
    goods: [
      {
        id: '1',
        image: '/shop/body/1.png',
      },
      {
        id: '2',
        image: '/shop/body/2.png',
      },
      {
        id: '3',
        image: '/shop/body/3.png',
      },
      {
        id: '4',
        image: '/shop/body/4.png',
      },
    ],
  },
  {
    id: '2',
    categoryTitle: 'Face',
    countGoods: 8,
    goods: [
      {
        id: '1',
        image: '/shop/body/1.png',
      },
      {
        id: '2',
        image: '/shop/body/2.png',
      },
    ]
  }
]);
</script>

<style scoped>

</style>
