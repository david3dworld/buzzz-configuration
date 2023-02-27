import { useCallback } from 'react';

const useLocalStorage = (key: string) => {
  let value = '';

  const localData = useCallback(() => {
    return localStorage.getItem(key);
  }, [key]);

  if (localData() === null) {
    value = '';
  } else {
    value = JSON.parse(localData()!);
  }

  return [value];
};

export default useLocalStorage;
