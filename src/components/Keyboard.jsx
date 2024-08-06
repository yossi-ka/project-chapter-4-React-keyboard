import classes from "./Keyboard.module.css";
import { historyActions } from "./KeyboardManage";
import KeyboardButton from "./KeyboardButton";

function Keyboard(props) {
  function showLetter(letter) {
    const newAction = {
      content: props.values.content + letter,
      color: props.values.color,
      size: props.values.size,
    };
    historyActions.push(newAction);
    console.log(historyActions);
    props.setTextareaContent((prev) => prev + letter);
  }
  return props.arr.map((letter, key) => (
    <KeyboardButton
      key={key}
      letter={letter}
      showLetter={showLetter}
      widthSpaceKey={props.widthSpaceKey}
    />
  ));
}
export default Keyboard;
