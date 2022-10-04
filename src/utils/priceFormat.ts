export function rubFormat(number: number) {
  return new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB" }).format(
    number
  )
}