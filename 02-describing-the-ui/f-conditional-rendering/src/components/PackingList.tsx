import Item from "./Item";

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" hidden={false} />
        <Item isPacked={true} name="Helmet with a golden leaf" hidden={true} />
        <Item isPacked={false} name="Photo of Tam" hidden={false} />
      </ul>
    </section>
  );
}

export default PackingList;
