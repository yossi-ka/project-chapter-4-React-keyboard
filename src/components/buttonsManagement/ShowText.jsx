// import { historyActions } from "../KeyboardManage";
import classes from "../Keyboard.module.css";
function ShowText(props) {
  return (
    <ul style={{ listStyle: "none" }}>
      {props.textareaContent.map((li, key) => (
        <li
          className={classes.li}
          key={key}
          style={{ color: li.color, fontSize: li.size, letterSpacing: li.letter===" "&&"2px" }}
        >
          {li.letter}
        </li>
      ))}
    </ul>
  );
}
export default ShowText;
