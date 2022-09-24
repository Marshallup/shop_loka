export interface IImage {
  id: number;
  path: string;
}

export class ImageDto implements IImage {
  id: number;
  path: string;
}