import { ImageDto } from "../dto/Image.dto";

export class Image extends ImageDto {
  constructor(dto: ImageDto) {
    super();
    Object.assign(this, dto);
  }
}
