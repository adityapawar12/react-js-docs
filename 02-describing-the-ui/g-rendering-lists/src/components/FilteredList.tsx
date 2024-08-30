interface Person {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
}

function FilteredList() {
  // Structured data
  const people: Array<Person> = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
      accomplishment: "spaceflight calculations",
      imageId: "MK3eW3A",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
      accomplishment: "discovery of Arctic ozone hole",
      imageId: "mynHUSa",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
      accomplishment: "electromagnetism theory",
      imageId: "bE7W1ji",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
      accomplishment:
        "pioneering cortisone drugs, steroids and birth control pills",
      imageId: "IOjWm71",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
      accomplishment: "white dwarf star mass calculations",
      imageId: "lrWQx8l",
    },
  ];

  function getImageUrl(person: Person) {
    return "https://i.imgur.com/" + person.imageId + "s.jpg";
  }

  // 1. Create a new array of just “chemist” people, chemists, by calling filter() on the people filtering by person.profession === 'chemist'
  const chemists = people.filter(
    (person: Person) => person.profession === "chemist"
  );

  // 2. Now map over chemists
  const listItems = chemists.map((person: Person) => (
    // Keeping list items in order with key
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  // 3. Lastly, return the listItems from your component
  return <ul>{listItems}</ul>;
}

export default FilteredList;
