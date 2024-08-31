function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      {/* If you click on either button, its onClick will run first, followed by the parent <div>’s onClick. */}
      <button onClick={() => alert("Playing!")}>Play Movie</button>

      {/* Stopping propagation */}
      {/* Event handlers receive an event object as their only argument. */}
      {/* If you want to prevent an event from reaching parent components, you need to call e.stopPropagation() */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          alert("Uploading!");
        }}
      >
        Upload Image
      </button>
    </div>
  );
}

export default Toolbar;
