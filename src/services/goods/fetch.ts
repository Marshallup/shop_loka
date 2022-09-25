import { Good } from "~~/src/domain/good";
import { FetchModel } from "~~/src/types/Fetch";
import { CategoryID, IGetAllFilter } from "./types";

class FetchClass implements FetchModel {
  async getAll(initCategoryVal: CategoryID = 'all') {
    const categoryID = ref<CategoryID>(initCategoryVal);

    return useApi<Good[]>(
      () => 
        `goods/?filter=${JSON.stringify({
          categoryID: unref(categoryID),
        })}`,
      {
        key: 'goods',
        default: () => [],
        watch: [categoryID]
      },
    )
    .then(data => ({
      ...data,
      categoryID,
    }))
  }
}

export const FetchGoods = new FetchClass();
