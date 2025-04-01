import { useEffect, useState } from 'react'

function useLoadedApplication() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded
}

export default useLoadedApplication