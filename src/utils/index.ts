import { useEffect, useRef } from 'react'

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const componentLoader = async <T>(
  fn: () => Promise<T>,
  retriesLeft: number = 2,
  interval: number = 750,
  exponential: boolean = false
): Promise<T> => {
  try {
    const val = await fn()
    return val
  } catch (error) {
    if (retriesLeft) {
      await new Promise((r) => setTimeout(r, interval))
      return componentLoader(
        fn,
        retriesLeft - 1,
        exponential ? interval * 2 : interval,
        exponential
      )
    } else {
      throw new Error(`(Chunk Load Error) Realoding due to error...`)
    }
  }
}

export const useKeyboardShortcut = (
  shortcutKey: string,
  callback: () => void
) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { metaKey, ctrlKey, key } = event
      const isShortcutKeyPressed =
        (metaKey || ctrlKey) && key.toLowerCase() === shortcutKey.toLowerCase()

      if (isShortcutKeyPressed) {
        event.preventDefault()
        callbackRef.current()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [shortcutKey])
}
