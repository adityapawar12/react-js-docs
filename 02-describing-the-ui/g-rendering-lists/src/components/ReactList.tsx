function ReactList() {
  // 1. Move the data into an array
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];

  // 2. Map the people members into a new array of JSX nodes, listItems
  const listItems = people.map((person, index) => (
    <li key={index}>{person}</li>
  ));

  // 3. Return listItems from your component wrapped in a <ul>
  return <ul>{listItems}</ul>;
}

export default ReactList;
