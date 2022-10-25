<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div>
    <BaseHeaderSpace />
    <BaseContainer> login </BaseContainer>
  </div>
</template>

<style scoped></style>
