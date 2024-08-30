import Copyright from "./components/Copyright";
import FancyText from "./components/FancyText";
import InspirationGenerator from "./components/InspirationGenerator";

// 1. App is the root of both the React Render Tree and Module Dependency Tree.
function App() {
  return (
    <>
      {/* 2 a. It has two nodes in React Render Tree which are FancyText and InspirationGenerator. */}
      {/* 2 b. It has three nodes in Module Dependency Tree which are FancyText, Copyright and InspirationGenerator imported components. */}

      {/* 3. Fancytext is leaf node it has no child nodes in both the React Render Tree and Module Dependency Tree. */}
      <FancyText title="" text="Get Inspired App" />

      {/* 4 a. InspirationGenerator has two nodes in React Render Tree, Copyright passed as children prop and FancyText or Color which render conditionally. */}
      {/* 4 b. InspirationGenerator has three nodes in Module Dependency Tree inspirations.js for data and FancyText and Color imported components. */}
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </>
  );
}
export default App;
