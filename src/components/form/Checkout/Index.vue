<template>
  <form @submit="onSubmit">
    <div>
      <FormCheckoutRow title="Покупатель">
        <FormCheckoutCol>
          <BaseFormInput
            v-model="name"
            label="Имя"
            placeholder="Имя"
            required
            :error="nameError"
          />
        </FormCheckoutCol>
        <FormCheckoutCol>
          <BaseFormInput
            v-model="surname"
            label="Фамилия"
            placeholder="Фамилия"
            required
            :error="surnameError"
          />
        </FormCheckoutCol>
      </FormCheckoutRow>

      <FormCheckoutRow title="Контакты">
        <FormCheckoutCol>
          <BaseFormInput
            v-model="email"
            :error="emailError"
            label="Электронная почта"
            placeholder="Email"
            required
          />
        </FormCheckoutCol>
        <FormCheckoutCol>
          <BaseFormInputPhone
            v-model="phone"
            label="Телефон"
            :error="phoneError"
            required
          />
        </FormCheckoutCol>
      </FormCheckoutRow>

      <FormCheckoutRow title="Адрес Доставки" disable-bottom-line wrap>
        <FormCheckoutRow sub-row>
          <FormCheckoutCol>
            <BaseFormInput
              v-model="country"
              label="Страна"
              placeholder="Страна"
              :error="countryError"
              required
            />
          </FormCheckoutCol>
          <FormCheckoutCol>
            <BaseFormInput
              v-model="city"
              label="Город"
              placeholder="Город"
              :error="cityError"
              required
            />
          </FormCheckoutCol>
        </FormCheckoutRow>
        <FormCheckoutRow sub-row>
          <FormCheckoutCol>
            <BaseFormInput
              v-model="index"
              label="Почтовый индекс"
              placeholder="Почтовый индекс"
              :error="indexError"
              required
            />
          </FormCheckoutCol>
          <FormCheckoutCol>
            <BaseFormInput
              v-model="address"
              label="Адрес, улица, дом, кв"
              placeholder="Адрес, улица, дом, кв"
              :error="addressError"
              required
            />
          </FormCheckoutCol>
        </FormCheckoutRow>
      </FormCheckoutRow>

      <FormCheckoutRow title="Комментарий к заказу" disable-bottom-line>
        <FormCheckoutCol>
          <BaseFormInput
            v-model="comment"
            placeholder="Оставьте комментарий"
            required
          />
        </FormCheckoutCol>
      </FormCheckoutRow>
    </div>

    <div class="mt-5 flex justify-between">
      <BaseButton
        dir="left"
        type="button"
        title="Изменить заказ"
        class="mr-3"
        @click="onChangeOrder"
      />
      <BaseButton title="Продолжить" type="submit" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import { FormCheckoutValues } from "@/store/cart";
import {
  nameValidator,
  surnameValidator,
  emailValidator,
  phoneValidator,
  requiredString,
} from "~~/src/utils/yupValidators";

interface CheckoutProps {
  initValues: FormCheckoutValues;
}
interface CheckoutEmits {
  (e: "submit", val: FormCheckoutValues): void;
  (e: "changeOrder"): void;
}

const props = defineProps<CheckoutProps>();
const emit = defineEmits<CheckoutEmits>();

const { handleSubmit, values: formValues } = useForm<FormCheckoutValues>({
  initialValues: props.initValues,
});

const { value: name, errorMessage: nameError } = useField<string>(
  "name",
  nameValidator()
);
const { value: surname, errorMessage: surnameError } = useField<string>(
  "surname",
  surnameValidator()
);
const { value: email, errorMessage: emailError } = useField<string>(
  "email",
  emailValidator()
);
const { value: phone, errorMessage: phoneError } = useField<number>(
  "phone",
  phoneValidator()
);
const { value: country, errorMessage: countryError } = useField<string>(
  "country",
  requiredString("Страна обязательна для заполнения")
);
const { value: city, errorMessage: cityError } = useField<string>(
  "city",
  requiredString("Город обязателен для заполнения")
);
const { value: index, errorMessage: indexError } = useField<string>(
  "index",
  requiredString("Почтовый индекс обязателен для заполнения")
);
const { value: address, errorMessage: addressError } = useField<string>(
  "address",
  requiredString("Адрес, улица, дом, кв обязательны для заполнения")
);
const { value: comment } = useField<string>("comment", null);

function onChangeOrder() {
  emit("changeOrder");
}

const onSubmit = handleSubmit((values) => {
  emit("submit", values);
});
</script>

<style scoped></style>
