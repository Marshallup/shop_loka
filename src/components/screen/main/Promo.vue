<template>
  <div class="
    bg-beigeMain
    pt-[var(--baseHeaderHeight)]
    min-h-[calc(100vh_-_100px)]
  ">
    <BaseContainer
      class="min-h-[400px]"
    >
      <BaseTypography
        tag="h1"
        class="text-[150px] text-center font-newYork mt-6"
      >
        healthy skin
      </BaseTypography>

      <div class="mt-8">
        <div class="flex justify-center">
          <SliderPromo />
          <div>
            <NuxtLink to="/shop">
              <div
                class="
                  flex
                  items-center
                  uppercase
                  rounded-full
                  tracking-[0.7em]
                  border-textMain
                  border-[1px]
                  py-[115px]
                  px-[67px]
                "
              >
                <div class="mr-4">
                  shop
                </div>
                <BaseIconArrow />
              </div>
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
