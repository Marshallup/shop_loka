import { Good } from "~~/src/domain/good";
import { FetchModel } from "~~/src/types/Fetch";

class FetchClass implements FetchModel {
  async getAll() {
    return useApi<Good[]>(
      "goods",
      {
        key: 'goods',
        default: () => [],
      },
    )
  }
}

export const FetchGoods = new FetchClass();
