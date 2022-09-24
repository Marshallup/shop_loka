import { Category } from "~~/src/domain/category";
import { FetchModel } from "~~/src/types/Fetch";

class FetchClass implements FetchModel {
  async getAll() {
    return useApi<Category[]>(
      "categories",
      {
        key: 'categories',
        default: () => [],
      })
  }
}

export const FetchCategories = new FetchClass();
