import { GoodDto } from "~~/src/dto/Good.dto";
import { Category } from "./Category";
import { Image } from "./Image";

export class Good extends GoodDto {
  constructor(dto: GoodDto) {
    super();
    Object.assign(this, dto);

    if (dto.category) {
      this.category = new Category(this.category);
    }

    if (dto.images) {
      this.images = this.images.map(img => new Image(img));
    }
    
    if (dto.mainPhoto) {
      this.mainPhoto = new Image(dto.mainPhoto);
    }
  }

  toJSON() {
    return { ...this }
  }
}
