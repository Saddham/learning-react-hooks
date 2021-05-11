import { useReducer } from 'react';

const initialState = {
  message: 'Hi',
};

function reducer(state, action) {
  switch (action.type) {
    case 'yell':
      return {
        message: 'HEY!',
      };
    case 'whisper':
      return {
        message: 'execuse me',
      };
    default:
      return {
        message: 'Hi',
      };
  }
}

function Messenger() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({type: 'yell'})}>YELL</button>
      <button onClick={() => dispatch({type: 'whisper'})}>whisper</button>
    </>
  );
}

export default Messenger;
