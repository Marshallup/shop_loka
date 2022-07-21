<template>
  <div class="layout layout-default flex flex-col min-h-screen justify-between">
      <BaseHeader />
      
      <main class="flex-grow">
        <slot />
      </main>

      <BaseFooter />
  </div>
</template>

<script lang="ts" setup>

useHead({
  bodyAttrs: {
    class: 'font-montserrat bg-bgMain text-textMain',
  },
});

</script>
