import Button from "./Button";

function PlayButton({ movieName }: { movieName: string }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

export default PlayButton;
