import TodoList from "./components/ToDoList";
import UpdatedTodoList from "./components/UpdatedToDoList";

function App() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";

  return (
    <>
      {/* Passing strings with quotes  */}
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />

      {/* Use a value from JavaScript by replacing " and " with { and } */}
      <img className="avatar" src={avatar} alt={description} />

      <TodoList />

      {/* 
        Where to use curly braces 
        You can only use curly braces in two ways inside JSX:

        As text directly inside a JSX tag: <h1>{name}'s To Do List</h1> works, but <{tag}>Gregorio Y. Zara's To Do List</{tag}> will not.
        As attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}".
      */}
      <UpdatedTodoList />
    </>
  );
}

export default App;
