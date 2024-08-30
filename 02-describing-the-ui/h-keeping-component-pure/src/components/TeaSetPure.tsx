function Cup({ guest }: { guest: number }) {
  // Pure functions don’t mutate variables outside of the function’s scope or objects that were created before the call—that makes them impure
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSetPure() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
