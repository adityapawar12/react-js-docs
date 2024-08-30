function Item({
  name,
  isPacked,
  hidden,
}: {
  name: string;
  isPacked: boolean;
  hidden: boolean;
}) {
  // Conditionally returning nothing with null
  if (hidden) {
    return null;
  }

  // Conditionally returning JSX
  //   if (isPacked) {
  //     return <li className="item">{name} ✅</li>;
  //   }

  //   return <li className="item">{name}</li>;

  // Conditional (ternary) operator (? :)
  //   return (
  //     <li className="item">{isPacked ? <del>{name + " ✅"}</del> : name}</li>
  //   );

  // Logical AND operator (&&)
  //   return (
  //     <li className="item">
  //       {name} {isPacked && "✅"}
  //     </li>
  //   );

  // Conditionally assigning JSX to a variable
  let itemContent = name;

  if (isPacked) {
    itemContent = name + " ✅";
  }

  return <li className="item">{itemContent}</li>;
}

export default Item;
