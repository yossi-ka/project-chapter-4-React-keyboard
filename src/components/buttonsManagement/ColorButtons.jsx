import { historyActions } from "../KeyboardManage";
import classes from "../Keyboard.module.css";

function ColorButtons(props) {
  const changeColor = (col) => {
    const newTextareaContent = {
      letter: "",
      color: col,
      size: props.textareaContent[props.textareaContent.length - 1].size,
    };

    props.setTextareaContent((prev) => {
      const newArrContent = [...prev, newTextareaContent];
      historyActions.push(newArrContent);
      return newArrContent;
    });
  };

  return (
    <div className={classes.colors}>
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => changeColor("green")}
      >
        Green
      </button>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => changeColor("red")}
      >
        Red
      </button>
      <button
        style={{ backgroundColor: "orange" }}
        onClick={() => changeColor("orange")}
      >
        Orange
      </button>
      <button
        style={{ backgroundColor: "blue" }}
        onClick={() => changeColor("blue")}
      >
        Blue
      </button>
      <button
        style={{ backgroundColor: "brown" }}
        onClick={() => changeColor("brown")}
      >
        Brown
      </button>
      <button
        style={{ backgroundColor: "black" }}
        onClick={() => changeColor("black")}
      >
        Black
      </button>
    </div>
  );
}
export default ColorButtons;
