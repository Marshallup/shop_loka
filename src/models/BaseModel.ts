export class BaseModel {
  toJSON() {
    return { ...this }
  }
}