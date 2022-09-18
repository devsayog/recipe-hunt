export const debounce = <T extends (...args: any[]) => unknown>(
  fn: T,
  delay = 400,
) => {
  let timeOut: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    if (timeOut) {
      clearTimeout(timeOut)
    }
    timeOut = setTimeout(() => fn(...args), delay)
  }
}
