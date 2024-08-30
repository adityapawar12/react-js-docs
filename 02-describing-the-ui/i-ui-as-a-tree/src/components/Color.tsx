function Color({ value }: { value: string }) {
  return (
    <div
      className="colorbox"
      style={{ backgroundColor: value, height: 80, width: 80, margin: 20 }}
    />
  );
}

export default Color;
