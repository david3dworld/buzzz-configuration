import { useEffect, useRef } from 'react';

export default function useOutsideClick(callback: any) {
  const ref = useRef<any>(null);

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(ref, event);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return [ref];
}
