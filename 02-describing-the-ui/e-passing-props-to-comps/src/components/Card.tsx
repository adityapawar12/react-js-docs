// Passing JSX as children
function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

export default Card;
