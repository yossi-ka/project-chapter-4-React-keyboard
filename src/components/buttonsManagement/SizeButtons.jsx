import classes from "../Keyboard.module.css";
function SizeButtons(props) {
  return (
    <div className={classes.sizes}>
      <button style={{fontSize:"20px"}} onClick={() => props.setTextSize(20)}>20</button>
      <button style={{fontSize:"30px"}} onClick={() => props.setTextSize(30)}>30</button>
      <button style={{fontSize:"40px"}} onClick={() => props.setTextSize(40)}>40</button>
      <button style={{fontSize:"50px"}} onClick={() => props.setTextSize(50)}>50</button>
    </div>
  );
}
export default SizeButtons;
