export default function isOverEighteen(year, month, day) {
  return new Date(year + 18, month - 1, day) <= new Date();
}
