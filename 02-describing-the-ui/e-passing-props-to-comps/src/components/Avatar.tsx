function getImageUrl(
  person: { name: string; imageId: string },
  size: string = "s"
) {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

// Specifying a default value for a prop
function Avatar({
  person,
  size = 100,
}: {
  person: { name: string; imageId: string };
  size: number;
}) {
  return (
    <>
      {/* Familiar props */}
      {/* Props are the information that you pass to a JSX tag. */}
      {/* For example, className, src, alt, width, and height are some of the props you can pass to an <img> */}
      <img
        className="avatar"
        src="https://i.imgur.com/1bX5QH6.jpg"
        alt="Lin Lanying"
        width={100}
        height={100}
      />

      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    </>
  );
}

export default Avatar;
