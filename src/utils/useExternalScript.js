/* import { useEffect } from 'react';

const useExternalScript = (src) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
};

export default useExternalScript; // Ensure that the hook is exported

*/