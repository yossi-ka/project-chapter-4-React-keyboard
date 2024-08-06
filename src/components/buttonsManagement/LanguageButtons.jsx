import classes from "./Keyboard.module.css";
function LanguageButtons() {
  return (
    <div className={classes.languages}>
      <button>Hebrew</button>
      <button>English - up</button>
      <button>English - low</button>
      <button>Symbols</button>
    </div>
  );
}

export default LanguageButtons