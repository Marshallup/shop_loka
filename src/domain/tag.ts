import { Characteristics } from "./characteristic";
import { Ingredient } from "./ingredient";

export interface Tag {
  id: number;
  title: string;
  characteristics?: Characteristics[],
  ingredients?: Ingredient[],
}
