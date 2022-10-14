export function truncateWords(str, count) {
  return str.split(" ").slice(0, count).join(" ")
}