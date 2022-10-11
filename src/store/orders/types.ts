import { Good } from "~~/src/domain/good";

export interface IOrder {
  id: number;
  goods: Good[],
}