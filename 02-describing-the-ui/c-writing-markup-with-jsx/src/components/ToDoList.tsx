function ToDoList() {
  return (
    // The Rules of JSX
    // 1. Return a single root element
    <>
      <h1>Hedy Lamarr's Todos</h1>
      {/* 2. Close all the tags  */}
      {/* self-closing tags like <img> must become <img /> */}
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        // 3. camelCase all most of the things!
        // Since class is a reserved word, in React you write className instead
        className="photo"
      />
      <ul>
        {/* tags like <li>oranges must be written as <li>oranges</li> */}
        <li>Invent new traffic lights </li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}

export default ToDoList;
