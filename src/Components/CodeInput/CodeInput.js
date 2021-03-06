import React, { useEffect, useRef, useState } from "react";
import styles from "./CodeInput.module.css";

function CodeInput({ fields, onChange, disabled }) {
  const BACKSPACE_KEY = 8;
  const LEFT_ARROW_KEY = 37;
  const RIGHT_ARROW_KEY = 39;

  const [code, setCode] = useState(
    Array.from({ length: parseInt(fields) }).map(() => "")
  );

  const [codeRef, setCodeRef] = useState(
    Array.from({ length: parseInt(fields) }).map(() => useRef(null))
  );

  useEffect(() => {
    try {
      onChange(code);
    } catch (e) {}
  }, [code]);

  const modifyCode = (codeNumber, index) => {
    setCode((code) =>
      code.map((initial, codeIndex) =>
        index.toString() === codeIndex.toString()
          ? codeNumber.toString()
          : initial
      )
    );
  };

  const moveToNext = () => {
    try {
      const inputs = Array.prototype.slice.call(
        document.querySelectorAll("input")
      );
      const index =
        (inputs.indexOf(document.activeElement) + 1) % inputs.length;
      const input = inputs[index];
      input.focus();
      input.select();
      moveCursorToEnd(input);
    } catch (e) {}
  };

  const moveBack = () => {
    try {
      const inputs = Array.prototype.slice.call(
        document.querySelectorAll("input")
      );
      const index =
        (inputs.indexOf(document.activeElement) - 1) % inputs.length;
      const input = inputs[index];
      input.focus();
      moveCursorToEnd(input);
      input.select();
    } catch (e) {}
  };

  //code input .md
  /*
   * It should have a bunch of inputs
   * THose inputs should allow one character
   * On backspace it will move back
   * If input contains something it will delete it and will not move back
   * it will move to next input after typing
   * left and right arrows will navigate back and forth
   * */

  function moveCursorToEnd(el) {
    if (typeof el.selectionStart == "number") {
      el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != "undefined") {
      el.focus();
      let range = el.createTextRange();
      range.collapse(false);
      range.select();
    }
  }

  return (
    <div>
      {code.map((field, index) => {
        return (
          <input
            type={"text"}
            inputMode={"numeric"}
            key={index}
            ref={codeRef[index]}
            disabled={disabled}
            value={code[index]}
            className={styles.input}
            onFocus={(event) => {
              console.log(codeRef[index].current.selectionEnd);
            }}
            onKeyDown={function (event) {
              const value = event.target.value;
              const key = event.keyCode;

              if (value.length === 1) {
                //only 1 letter
              } else if (value.length === 0) {
                //she entered an empty string
                if (key === BACKSPACE_KEY) {
                  moveBack();
                }
              } else {
                //move to next
              }

              if (key === LEFT_ARROW_KEY) {
                moveBack();
              } else if (key === RIGHT_ARROW_KEY) {
                moveToNext();
              }
            }}
            onChange={(event) => {
              const value = event.target.value;

              function isNumeric(number) {
                return +number === +number;
              }

              if (isNumeric(value)) {
                if (value.length === 1) {
                  //only 1 letter
                  //do update stuff
                  modifyCode(value, index.toString());
                  //move to next
                  moveToNext();
                } else if (value.length === 0) {
                  //she entered an empty string
                  modifyCode("", index.toString());
                } else {
                  //move to next
                  moveToNext();
                }
              }
            }}
          />
        );
      })}
    </div>
  );
}

export default CodeInput;
