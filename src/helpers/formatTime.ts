export const formatTime = (time: string): string => {
  const hours = time.slice(11,13)
  const min = time.slice(14,16)
  return `${hours}:${min}`
}
