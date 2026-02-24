
export function formatDate(dateIso) {
  return new Date(dateIso).toLocaleDateString()
}