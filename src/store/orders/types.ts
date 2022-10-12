import { Good } from "~~/src/domain/good";

export interface IGoodInfoOrder {
  id: number;
  good: Good,
  count: number,
}
export interface IOrder {
  id: number;
  goodsInfo: IGoodInfoOrder[],
}