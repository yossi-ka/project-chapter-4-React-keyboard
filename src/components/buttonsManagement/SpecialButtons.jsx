import { historyActions } from "../KeyboardManage";
import classes from "../Keyboard.module.css"

function SpecialButtons(props) {
  function undo() {
    if (historyActions.length <= 1) return;
    historyActions.pop();
    const returnAction = historyActions[historyActions.length - 1];
    props.setTextColor(returnAction.color);
    props.setTextareaContent(returnAction.content);
    props.setTextSize(returnAction.size);
  }

  function backspace() {
    props.setTextareaContent((prev) => prev.slice(0, -1));
  }

  function clearAll() {
    props.setTextareaContent("");
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
