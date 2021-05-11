import { useTrees } from '../../index';

function Trees() {
  const { trees } = useTrees();

  return (
    <>
      <h1>Trees I have heard of</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </>
  );
}

export default Trees;
