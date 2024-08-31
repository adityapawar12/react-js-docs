function AlertButton({
  message,
  children,
}: {
  message: string;
  children: string;
}) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default AlertButton;
