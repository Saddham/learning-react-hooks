import { useRef } from 'react';
import useInput from '../custom-hook/useInput';

function ColorForm() {
  const sound = useRef();
  const [colorProps, setColor] = useInput('');

  const submit = (e) => {
    e.preventDefault();

    const soundVal = sound.current.value;
    const colorVal = colorProps.value;

    alert(`${soundVal} sounds like ${colorVal}`);

    sound.current.value = '';
    setColor('');
  };

  return (
    <form onSubmit={submit}>
      <input type="text" ref={sound} placeholder="Sound..." />
      <input {...colorProps} type="color" />
      <button>Add Color</button>
    </form>
  );
}

export default ColorForm;
