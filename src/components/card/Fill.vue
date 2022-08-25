<template>
  <div
    class="
      border
      border-blueOpacity
      bg-blueOpacity
      p-6
      text-black
      cursor-pointer
    "
  >
    <div>
      <div
        class="
          flex
          items-center
          justify-center
          mb-10
        "
      >
        <img
          :src="props.imgSrc"
        />
      </div>

      <div>
        <div
          class="
            text-xs
            tracking-wider
            uppercase
            mb-1
          "
        >
          {{ props.company }}
        </div>
        <div
          class="
            underline
            mb-1
          "
        >
          {{ props.title }}
        </div>
        <div
          class="
            text-sm
          "
        >
          $ {{ props.price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CardFillProps {
  imgSrc?: string,
  company: string,
  title: string,
  price: string,
}

const props = withDefaults(
  defineProps<CardFillProps>(),
  {
    imgSrc: '/shop/body/1.png',
  }
);

</script>

<style scoped>

</style>
