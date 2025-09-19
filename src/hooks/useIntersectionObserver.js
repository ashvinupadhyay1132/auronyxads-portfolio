import { useEffect, useRef, useState } from 'react'

export default function useIntersectionObserver(options = {}) {
  const targetRef = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    if (!targetRef.current) return
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(targetRef.current)
    return () => observer.disconnect()
  }, [options.root, options.rootMargin, options.threshold])

  return { ref: targetRef, isIntersecting }
}


