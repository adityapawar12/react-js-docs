function Cup({ guest }: { guest: number }) {
  // Pure functions don’t mutate variables outside of the function’s scope or objects that were created before the call—that makes them impure
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  // Local mutation: Your component’s little secret
  // it’s completely fine to change variables and objects that you’ve just created while rendering.
  const cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}
