<template>
  <div>
    <div
      v-if="props.title"
    >
      {{ props.title }}
    </div>
    <div>
      <div
        v-for="row in props.data"
        :key="row.id"
        class="
          border-black
          border-b
          pb-4
          mb-3
          last:mb-0
        "
      >
        <div
          class="
            flex
            justify-between
            text-sm
          "
        >
          <div>
            {{ row.title }}
          </div>
          <div>
            {{ row.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface BaseTableLineDownProps {
  title?: string,
  data: {
    id: string,
    title: string,
    content: string,
  }[],
}

const props = defineProps<BaseTableLineDownProps>();
</script>

<style scoped>

</style>
