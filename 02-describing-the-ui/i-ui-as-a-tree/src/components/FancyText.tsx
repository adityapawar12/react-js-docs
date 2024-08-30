function FancyText({ title, text }: { title: string; text: string }) {
  return title ? (
    <h1 className="fancy title">{text}</h1>
  ) : (
    <h3 className="fancy cursive">{text}</h3>
  );
}

export default FancyText;
