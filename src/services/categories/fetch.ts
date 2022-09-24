import { Category } from "~~/src/models/Category";
import { FetchModel } from "~~/src/types/Fetch";

class FetchClass implements FetchModel {
  async getAll() {
    return useApi<Category[]>(
      "categories",
      {
        key: 'categories',
        transform: categoriesDto => categoriesDto.map(categoryDto => new Category(categoryDto)),
        default: () => [],
      })
  }
}

export const FetchCategories = new FetchClass();
