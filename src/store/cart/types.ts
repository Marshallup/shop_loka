import { Good } from "~~/src/domain/good";

export interface GoodCart {
  id: number,
  good: Good,
  count: number,
}
