import classes from "./Keyboard.module.css";
import KeyboardButton from "./KeyboardButton";

function Keyboard(props) {
  function showLetter(letter) {
    props.setTextareaContent((prev) => prev + letter);
  }
  return props.arr.map((letter, key) => (
    <KeyboardButton key={key} letter={letter} showLetter={showLetter} />
  ));
}
export default Keyboard;
