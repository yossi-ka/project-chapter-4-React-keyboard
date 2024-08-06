import classes from "./Keyboard.module.css";
function KeyboardButton(props) {
  return (
    <button
      style={{
        gridColumn: props.letter === " " && `span ${props.widthSpaceKey}`,
      }}
      className={props.letter === " " ? classes.space : classes.key}
      onClick={() => props.showLetter(props.letter)}
    >
      {props.letter}
    </button>
  );
}
export default KeyboardButton;
