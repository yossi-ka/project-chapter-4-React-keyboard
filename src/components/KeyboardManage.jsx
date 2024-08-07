import Keyboard from "./Keyboard";
import LanguageButtons from "./buttonsManagement/LanguageButtons";
import ColorButtons from "./buttonsManagement/ColorButtons";
import SizeButtons from "./buttonsManagement/SizeButtons";
import SpecialButtons from "./buttonsManagement/SpecialButtons";
import classes from "./Keyboard.module.css";
import { useState } from "react";
import ShowText from "./buttonsManagement/ShowText";
import keyboardArrs from "./keyboardArrs";
export const historyActions = [{ letter: "", color: "black", size: "20px" }];

function KeyboardManage() {
  const [keyboardType, setKeyboardType] = useState(0);
  const [textareaContent, setTextareaContent] = useState([
    { letter: "", color: "black", size: "20px" },
  ]);

  return (
    <div className={classes.main}>
      <div className={classes.textarea}>
        <ShowText textareaContent={textareaContent} />
      </div>
      <LanguageButtons setKeyboardType={setKeyboardType} />
      <div className={classes.keyboard} dir={keyboardArrs[keyboardType].dir}>
        <Keyboard
          arr={keyboardArrs[keyboardType].letters}
          textareaContent={textareaContent}
          setTextareaContent={setTextareaContent}
          widthSpaceKey={keyboardType === 0 ? 3 : keyboardType === 3 ? 10 : 4}
        />
      </div>
      <ColorButtons
        textareaContent={textareaContent}
        setTextareaContent={setTextareaContent}
      />
      <SizeButtons
        textareaContent={textareaContent}
        setTextareaContent={setTextareaContent}
      />
      <SpecialButtons
        textareaContent={textareaContent}
        setTextareaContent={setTextareaContent}
      />
    </div>
  );
}
export default KeyboardManage;
