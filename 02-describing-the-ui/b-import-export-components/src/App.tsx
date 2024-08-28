// Default exported component import
import Gallery from "./components/Gallery";

// Named exported component import
import { Profile } from "./components/Gallery";
import NewProfile from "./components/NewProfile";

export default function App() {
  return (
    <>
      {/* Default export */}
      <Gallery />

      {/* Named export */}
      <Profile />

      {/* Default export */}
      <NewProfile />
    </>
  );
}
