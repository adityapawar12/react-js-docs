let guest = 0;

function Cup() {
  // Side Effects: (un)intended consequences
  // Bad: changing a preexisting variable!
  // This value changes when we just change some file and save it not good.
  // This is also known as mutation
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
