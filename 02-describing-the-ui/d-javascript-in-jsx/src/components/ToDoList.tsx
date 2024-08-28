function TodoList() {
  // First declares a name for the scientist, name
  const name = "Gregorio Y. Zara";
  const today = new Date();

  function formatDate() {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(today);
  }

  return (
    <>
      {/* Embed it with curly braces inside the <h1> */}
      <h1>
        {name}'s To Do List
        {/* Any JavaScript expression will work between curly braces, including function calls like formatDate(): */}
        <span> {formatDate()}</span>
      </h1>

      {/* Using “double curlies”: CSS and other objects in JSX. Inline style properties are written in camelCase.  */}
      <ul
        style={{
          backgroundColor: "black",
          color: "pink",
        }}
      >
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </>
  );
}

export default TodoList;
