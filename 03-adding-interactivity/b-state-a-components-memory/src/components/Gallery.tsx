import { sculptureList } from "./data.ts";
// 1. import useState from React at the top of the file
import { useState } from "react";

// To update a component with new data, two things need to happen:
// Retain the data between renders.
// Trigger React to render the component with new data (re-rendering).

// The useState Hook provides those two things:
// A state variable to retain the data between renders.
// A state setter function to update the variable and trigger React to render the component again.

function Gallery() {
  // Local variables don’t persist between renders. When React renders this component a second time,
  // it renders it from scratch—it doesn’t consider any changes to the local variables.
  // let index = 0;

  // function handleClick() {
  //   // Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.
  //   index = index + 1;
  // }

  // Adding a state variable
  // The array returned by useState always has exactly two items. and we can access them using array destructuring
  // index is a state variable and setIndex is the setter function.
  // In React, useState, as well as any other function starting with “use”, is called a Hook.
  // Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks
  const [index, setIndex] = useState(0);

  // Giving a component multiple state variables.You can have as many state variables of as many types as you like in one component.
  // It is a good idea to have multiple state variables if their state is unrelated, like index and showMore in this example.
  // But if you find that you often change two state variables together, it might be easier to combine them into one.
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <div>
        <button onClick={handleMoreClick}>
          {showMore ? "Hide" : "Show"} details
        </button>
      </div>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}

export default Gallery;
