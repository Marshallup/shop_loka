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

export function convertMlToOz(volume: string) {
  const volumeNumber = parseInt(volume);

  if (!isNaN(volumeNumber)) {
    return String(Math.round(volumeNumber * 0.033814));
  }

  return volume;
}
