import Card from "./components/Card";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      {/* When you nest content inside a JSX tag, the parent component will receive that content in a prop called children */}
      <Card>
        <Profile />
      </Card>
    </>
  );
}

export default App;
