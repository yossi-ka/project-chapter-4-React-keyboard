import classes from "../Keyboard.module.css";
import { historyActions } from "../KeyboardManage";

function SizeButtons(props) {
  const changeSize = (sz) => {
    const newAction = {
      content: props.values.content,
      color: props.values.color,
      size: sz,
    };
    historyActions.push(newAction);
    console.log(historyActions);
    props.setTextSize(sz);
  };

  return (
    <div className={classes.sizes}>
      <button style={{ fontSize: "20px" }} onClick={() => changeSize("20px")}>
        20
      </button>
      <button style={{ fontSize: "30px" }} onClick={() => changeSize("30px")}>
        30
      </button>
      <button style={{ fontSize: "40px" }} onClick={() => changeSize("40px")}>
        40
      </button>
      <button style={{ fontSize: "50px" }} onClick={() => changeSize("50px")}>
        50
      </button>
    </div>
  );
}
export default SizeButtons;
