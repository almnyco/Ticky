import { useEffect, useState } from 'react';

function getDimensions() {
  if (typeof window === "undefined") return { width: 0, height: 0 }

  const { innerWidth: width, innerHeight: height } = window;

  return { width, height }
}

function useDimensions() {
  const [dimension, setDimension] = useState(getDimensions())

  useEffect(() => {
    const handleResize = () => {
      setDimension(getDimensions());
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])


  return dimension;
}

export default useDimensions;