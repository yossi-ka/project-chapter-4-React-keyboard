import classes from "../Keyboard.module.css";
function SizeButtons(props) {
  return (
    <div className={classes.sizes}>
      <button onClick={() => props.setTextSize(20)}>20</button>
      <button onClick={() => props.setTextSize(30)}>30</button>
      <button onClick={() => props.setTextSize(40)}>40</button>
      <button onClick={() => props.setTextSize(50)}>50</button>
    </div>
  );
}
export default SizeButtons;
