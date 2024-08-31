import AlertButton from "./components/AlertButton";
import Button from "./components/Button";
import ButtonNoPropogate from "./components/ButtonNoPropogate";
import PlayButton from "./components/PlayButton";
import SignUpNoReload from "./components/SignUpNoReload";
import SignUpReload from "./components/SignUpReload";
import Toolbar from "./components/Toolbar";
import UploadButton from "./components/UploadButton";

function App() {
  // handleClick is an event handler. Event handler functions:
  // Are usually defined inside your components.
  // Have names that start with handle, followed by the name of the event.

  // 1. Declare a function called handleClick inside your Button component.
  function handleClick() {
    // 2. Implement the logic inside that function (use alert to show the message).
    alert("You clicked me!");
  }

  return (
    <>
      {/* Adding event handlers */}
      <div>
        <button>I don't do anything</button>

        {/* 3. Add onClick={handleClick} to the <button> JSX. */}
        {/* Functions passed to event handlers must be passed, not called. */}
        <button onClick={handleClick}>I do something</button>

        {/* Alternatively, you can define an event handler inline in the JSX: */}
        <button
          onClick={() => {
            alert("You clicked me!");
          }}
        >
          I do something part 2
        </button>
      </div>

      {/* Reading props in event handlers  */}
      <div>
        <AlertButton message="Playing!">Play Movie</AlertButton>
        <AlertButton message="Uploading!">Upload Image</AlertButton>
      </div>

      {/* Passing event handlers as props */}
      <div>
        <PlayButton movieName="Kiki's Delivery Service" />
        <UploadButton />
      </div>

      {/* Event propagation and stopping Event propagation/bubbling */}
      <Toolbar />
      <div onClick={() => alert("propagation")}>
        <Button onClick={() => alert("easy bubbling")}>Propagate</Button>
        <ButtonNoPropogate onClick={() => alert("easy no bubbling")}>
          Don't propagate
        </ButtonNoPropogate>
      </div>

      {/* Preventing default behavior */}
      <div>
        <SignUpReload />
        <SignUpNoReload />
      </div>
    </>
  );
}

export default App;
