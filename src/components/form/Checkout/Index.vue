<template>
  <div>
    <FormCheckoutRow title="Покупатель" class="mb-5 last:mb-0">
      <template #input-1>
        <BaseFormInput label="Имя" placeholder="Имя" required />
      </template>
      <template #input-2>
        <BaseFormInput label="Фамилия" placeholder="Фамилия" required />
      </template>
    </FormCheckoutRow>
    <FormCheckoutRow title="Контакты" class="mb-5 last:mb-0">
      <template #input-1>
        <BaseFormInput label="Электронная почта" placeholder="Email" required />
      </template>
      <template #input-2>
        <BaseFormInput label="Телефон" placeholder="Телефон" required />
      </template>
    </FormCheckoutRow>
    <FormCheckoutRow title="Адрес Доставки" class="mb-5 last:mb-0">
      <template #input-1>
        <BaseFormInput label="Страна" placeholder="Страна" required />
      </template>
      <template #input-2>
        <BaseFormInput label="Город" placeholder="Город" required />
      </template>
      <template #input-3>
        <BaseFormInput
          label="Почтовый индекс"
          placeholder="Почтовый индекс"
          required
        />
      </template>
      <template #input-4>
        <BaseFormInput
          label="Адрес, улица, дом, кв"
          placeholder="Адрес, улица, дом, кв"
          required
        />
      </template>
    </FormCheckoutRow>
    <FormCheckoutRow
      title="Комментарий к заказу"
      :disable-bottom-line="true"
      class="mb-5 last:mb-0"
    >
      <template #input-1>
        <BaseFormInput placeholder="Оставьте комментарий" required />
      </template>
    </FormCheckoutRow>

    <div class="mt-5 flex justify-between">
      <BaseButton dir="left" title="Изменить заказ" class="mr-3" />
      <BaseButton title="Подтвердить" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
