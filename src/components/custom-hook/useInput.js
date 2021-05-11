import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return [
    { value, onChange: (e) => setValue(e.target.value) },
    (newValue) => setValue(newValue),
  ];
}

export default useInput;
