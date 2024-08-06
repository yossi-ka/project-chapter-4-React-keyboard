import classes from "./Keyboard.module.css";

function KeyboardButton(props) {
  const handleClick = () => {
    props.showLetter(props.letter);
  };

  return (
    <button
      style={{
        gridColumn: props.letter === " " && `span ${props.widthSpaceKey}`,
      }}
      className={props.letter === " " ? classes.space : classes.key}
      onClick={handleClick}
    >
      {props.letter}
    </button>
  );
}
export default KeyboardButton;
