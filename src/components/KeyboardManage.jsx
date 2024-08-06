import Keyboard from "./Keyboard";
import LanguageButtons from "./buttonsManagement/LanguageButtons";
import ColorButtons from "./buttonsManagement/ColorButtons";
import SizeButtons from "./buttonsManagement/SizeButtons";
// import SpecialButtons from "./buttonsManagement/SpecialButtons";
import classes from "./Keyboard.module.css";
import { useState } from "react";

const keyboardArrs = [
  {
    language: "Hebrew",
    dir: "rtl",
    letters: [
      "א",
      "ב",
      "ג",
      "ד",
      "ה",
      "ו",
      "ז",
      "ח",
      "ט",
      "י",
      "כ",
      "ך",
      "ל",
      "מ",
      "ם",
      "נ",
      "ן",
      "ס",
      "ע",
      "פ",
      "ף",
      "צ",
      "ץ",
      " ",
      "ק",
      "ר",
      "ש",
      "ת",
    ],
  },
  {
    language: "EnglishUp",
    dir: "ltr",
    letters: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      " ",
      "X",
      "Y",
      "Z",
    ],
  },
  {
    language: "EnglishLow",
    dir: "ltr",
    letters: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      " ",
      "x",
      "y",
      "z",
    ],
  },
  {
    language: "Symbols",
    dir: "ltr",
    letters: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "_",
      "=",
      "+",
      "[",
      "]",
      "{",
      "}",
      "|",
      "\\",
      ":",
      ";",
      "'",
      '"',
      ",",
      ".",
      "<",
      ">",
      "/",
      "?",
      " ",
    ],
  },
];

function KeyboardManage() {
  const [textareaContent, setTextareaContent] = useState("");
  const [keyboardType, setKeyboardType] = useState(0);
  const [textColor, setTextColor] = useState("black");
  const [textSize, setTextSize] = useState("20px");

  return (
    <div className={classes.main}>
      <div
        dir={keyboardArrs[keyboardType].dir}
        className={classes.textarea}
        style={{ fontSize: textSize, color: textColor }}
      >
        {textareaContent}
      </div>
      <LanguageButtons setKeyboardType={setKeyboardType} />
      <div className={classes.keyboard} dir={keyboardArrs[keyboardType].dir}>
        <Keyboard
          arr={keyboardArrs[keyboardType].letters}
          setTextareaContent={setTextareaContent}
          widthSpaceKey={keyboardType === 0 ? 3 : keyboardType === 3 ? 10 : 4}
        />
      </div>
      <ColorButtons setTextColor={setTextColor} />
      <SizeButtons setTextSize={setTextSize} />
      {/* <SpecialButtons
        textColor={textColor}
        textSize={textSize}
        textareaContent={textareaContent}
        setTextareaContent={setTextareaContent}
        setTextColor={setTextColor}
        setTextSize={setTextSize}
      /> */}
    </div>
  );
}
export default KeyboardManage;
