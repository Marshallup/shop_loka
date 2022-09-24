import { Category } from "../models/Category";
import { Image } from "../models/Image";

export interface IGood {
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

export class GoodDto implements IGood {
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
