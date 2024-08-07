// import classes from "./Keyboard.module.css";
import { historyActions } from "./KeyboardManage";
import KeyboardButton from "./KeyboardButton";

function Keyboard(props) {
  function showLetter(letter) {
    const newTextareaContent = {
      letter: letter,
      color: props.textareaContent[props.textareaContent.length - 1].color,
      size: props.textareaContent[props.textareaContent.length - 1].size,
    };
    const newArrContent = [...props.textareaContent, newTextareaContent]
    historyActions.push(newArrContent);
    props.setTextareaContent(newArrContent);
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
