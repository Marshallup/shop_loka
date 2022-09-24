import { Category } from "./category";
import { Image } from "./image";

export interface Good {
  id: number;
  category?: Category;
  characteristics: '';
  desc: string;
  except: string;
  howUse: string;
  images?: Image[];
  mainPhoto?: Image;
  price: number;
  title: string;
  volume: string;
}
