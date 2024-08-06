import classes from "../Keyboard.module.css";
function LanguageButtons(props) {

  const changeLanguage=(num)=>{
    props.setKeyboardType(num)
  }
  
  return (
    <div className={classes.languages}>
      <button onClick={()=>{changeLanguage(0)}}>Hebrew</button>
      <button onClick={()=>{changeLanguage(1)}}>English - up</button>
      <button onClick={()=>{changeLanguage(2)}}>English - low</button>
      <button onClick={()=>{changeLanguage(3)}}>Symbols</button>
    </div>
  );
}

export default LanguageButtons