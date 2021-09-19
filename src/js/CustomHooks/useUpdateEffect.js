import { useEffect, useRef } from "react"

export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true)

  useEffect(() => {
    if (firstRenderRef.current) {
        // I will be only on first render
      firstRenderRef.current = false
      return
    }
    return callback()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}