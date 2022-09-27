import { Good } from "~~/src/domain/good";

export interface IData {
  id: number;
  categoryTitle: string;
  countGoods: number;
  goods: Good[];
}
