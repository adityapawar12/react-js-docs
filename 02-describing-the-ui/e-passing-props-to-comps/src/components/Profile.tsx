import Avatar from "./Avatar";

// Passing props to a component
function Profile() {
  return (
    <>
      {/* Step 1: Pass props to the child component */}
      <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />
    </>
  );
}

export default Profile;
