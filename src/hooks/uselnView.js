/**
 * Custom hook for detecting when an element is in viewport
 * Used for scroll-triggered animations
 */

import { useState, useEffect, useRef } from 'react'

export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Once the element is in view, keep it visible
      if (entry.isIntersecting) {
        setIsInView(true)
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px',
      ...options,
    })

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options.threshold, options.rootMargin])

  return [ref, isInView]
}

export default useInView