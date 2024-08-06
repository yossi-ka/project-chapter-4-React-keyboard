import classes from "../Keyboard.module.css";

function ColorButtons(props) {
  return (
    <div className={classes.colors}>
      <button style={{ backgroundColor:"green"}}  onClick={()=>props.setTextColor("green")}>Green</button>
      <button style={{ backgroundColor:"red"}}    onClick={()=>props.setTextColor("red")}>Red</button>
      <button style={{ backgroundColor:"orange"}} onClick={()=>props.setTextColor("orange")}>Orange</button>
      <button style={{ backgroundColor:"blue"}}   onClick={()=>props.setTextColor("blue")}>Blue</button>
      <button style={{ backgroundColor:"brown"}}  onClick={()=>props.setTextColor("brown")}>Brown</button>
      <button style={{ backgroundColor:"black"}}  onClick={()=>props.setTextColor("black")}>Black</button>
    </div>
  );
}
export default ColorButtons;
