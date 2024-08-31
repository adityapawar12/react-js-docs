// Naming event handler props
// By convention, event handler props should start with on, followed by a capital letter.
function Button({
  onClick,
  children,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: any;
  children: React.ReactNode;
}) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
