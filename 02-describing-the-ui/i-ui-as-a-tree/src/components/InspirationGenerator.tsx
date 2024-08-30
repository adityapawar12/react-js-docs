import * as React from "react";
import FancyText from "./FancyText";
import Color from "./Color";
import inspirations from "./inspirations";

export default function InspirationGenerator({
  children,
}: {
  children: React.ReactNode;
}) {
  const [index, setIndex] = React.useState(0);
  const inspiration = inspirations[index];
  const next = () => setIndex((index + 1) % inspirations.length);

  return (
    <>
      <p>Your inspirational {inspiration.type} is:</p>
      {inspiration.type === "quote" ? (
        <FancyText title="" text={inspiration.value} />
      ) : (
        <Color value={inspiration.value} />
      )}

      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}
