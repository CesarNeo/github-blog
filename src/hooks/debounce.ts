import { useCallback, useRef, useState } from 'react'

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  const updateValue = useCallback(
    (value: string) => {
      if (timer.current) {
        clearTimeout(timer.current)
      }

      timer.current = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
    },
    [delay],
  )

  const clearValue = useCallback(() => {
    setDebouncedValue('')
  }, [])

  return { debouncedValue, updateValue, clearValue }
}

export default useDebounce
