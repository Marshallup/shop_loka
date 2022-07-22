<template>
  <div class="
    pt-6
    bg-beigeMain
    min-h-[calc(100vh_-_100px)]
  ">
    <BaseHeaderSpace />
    <BaseContainer
      class="min-h-[400px]"
    >
      <BaseTypography
        tag="h1"
        class="text-[150px] text-center font-newYork"
      >
        healthy skin
      </BaseTypography>

      <div class="mt-8">
        <div class="flex justify-center">
          <SliderPromo />
          <div class="mt-[130px] ml-20">
            <NuxtLink to="/shop">
              <BaseButton size="big">
                shop
              </BaseButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
