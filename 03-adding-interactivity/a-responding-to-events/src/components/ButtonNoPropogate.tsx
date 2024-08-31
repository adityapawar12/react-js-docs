function ButtonNoPropogate({
  onClick,
  children,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: any;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default ButtonNoPropogate;
