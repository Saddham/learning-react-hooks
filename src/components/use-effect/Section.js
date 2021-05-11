import { useEffect, useState } from 'react';

function Section() {
  const [name, setName] = useState('Jan');
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    document.title = `Celebrate ${name}`;
  }, [name]);

  useEffect(() => {
    console.log(`The user is: ${admin ? 'Admin' : 'Not admin'}`);
  }, [admin]);

  return (
    <section>
      <p>Congratulations {name}!</p>
      <button onClick={() => setName('Will')}>Change Winner</button>
      <p>{admin ? 'Logged in' : 'Not logged in'}</p>
      <button onClick={() => setAdmin(true)}>Log in</button>
    </section>
  );
}

export default Section;
