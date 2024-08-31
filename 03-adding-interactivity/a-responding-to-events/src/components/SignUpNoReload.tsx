function SignUpNoReload() {
  return (
    <form
      onSubmit={(e) => {
        // e.preventDefault() prevents the default browser behavior for the few events that have it.
        e.preventDefault();
        alert("Submitting!");
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}

export default SignUpNoReload;
