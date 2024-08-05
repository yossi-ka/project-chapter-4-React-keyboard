import classes from "./Keyboard.module.css";
function KeyboardButton(props) {
  return (
    <button
      className={props.letter === " " ? classes.space : classes.key}
      onClick={() => props.showLetter(props.letter)}
    >
      {props.letter}
    </button>
  );
}
export default KeyboardButton;
