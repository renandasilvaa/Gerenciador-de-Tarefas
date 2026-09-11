import { useState, useEffect } from 'react';

// hook pra salvar e ler dados do localStorage sem precisar repetir esse código em todo lugar
function useLocalStorage(key, initialValue) {
    // lê o localStorage uma vez quando o component monta
  const [value, setValue] = useState(() => {
    try {
      const storagedValue = localStorage.getItem(key);
      return storagedValue ? JSON.parse(storagedValue) : initialValue;
    } catch (error) {
      console.error('Erro ao ler o localStorage:', error);
      return initialValue;
    }
  });

  // toda vez que o value mudar, atualiza o LocalStorage
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