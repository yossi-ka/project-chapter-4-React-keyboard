import { historyActions } from "../KeyboardManage";
import classes from "../Keyboard.module.css";

function SpecialButtons(props) {
  function undo() {
    if (historyActions.length === 1) return;
    console.log(historyActions);

    props.setTextareaContent(() => {
      historyActions.pop();
      const HA = historyActions[historyActions.length - 1];
      return HA;
    });
  }

  function backspace() {
    if (props.textareaContent.length === 1) return;
    const newTextareaContent = props.textareaContent.splice(
      0,
      props.textareaContent.length - 1
    );
    historyActions.push(newTextareaContent);
    props.setTextareaContent(newTextareaContent);
  }

  function clearAll() {
    const newAction = {
      content: "",
      color: "black",
      size: "20px",
    };
    historyActions.push(newAction);
    props.setTextareaContent([newAction]);
  }

  return (
    <div className={classes.specials}>
      <button onClick={backspace}>Backspace</button>
      <button onClick={undo}>Undo</button>
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
}
export default SpecialButtons;
