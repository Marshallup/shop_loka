import { Good } from "@/models/Good";
import { FetchModel } from "~~/src/types/Fetch";

class FetchClass implements FetchModel {
  async getAll() {
    return useApi<Good[]>(
      "goods",
      {
        key: 'goods',
        transform: (goodsDto => goodsDto.map(goodDto => new Good(goodDto))),
        default: () => [],
      },
    )
  }
}

export const FetchGoods = new FetchClass();
