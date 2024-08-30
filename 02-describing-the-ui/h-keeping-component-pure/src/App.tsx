import Recipe from "./components/Recipe";
import TeaSet from "./components/TeaSet";
import TeaSetPure from "./components/TeaSetPure";

function App() {
  // A pure function
  // It minds its own business. It does not change any objects or variables that existed before it was called.
  // Same inputs, same output. Given the same inputs, a pure function should always return the same result.
  // double is a pure function. If you pass it 3, it will return 6. Always.
  function double(number: number) {
    return 2 * number;
  }

  return (
    <section>
      <p>Just calling double function for no warnings : {double(2)}</p>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />

      <TeaSet />

      <TeaSetPure />
    </section>
  );
}

export default App;
