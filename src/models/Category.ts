import { CategoryDto } from "../dto/Category.dto";

export class Category extends CategoryDto {
  constructor(dto: CategoryDto) {
    super();
    Object.assign(this, dto);
  }

  toJSON() {
    return { ...this }
  }
}
