import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storagedValue = localStorage.getItem(key);
      return storagedValue ? JSON.parse(storagedValue) : initialValue;
    } catch (error) {
      console.error('Erro ao ler o localStorage:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Erro ao salvar no localStorage:', error);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;