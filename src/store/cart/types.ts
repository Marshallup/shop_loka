import { Good } from "~~/src/domain/good";

export interface GoodCart {
  id: number,
  good: Good,
  count: number,
}

export interface FormCheckoutValues {
  name: string;
  surname: string;
  email: string;
  phone: number | null;
  country: string;
  city: string;
  index: string;
  address: string;
  comment: string;
}
