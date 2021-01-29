import React, { useEffect, useRef, useState } from "react";
import styles from "./CodeInput.module.css";

function CodeInput({ fields }) {
  const BACKSPACE_KEY = 8;
  const LEFT_ARROW_KEY = 37;
  const UP_ARROW_KEY = 38;
  const RIGHT_ARROW_KEY = 39;
  const DOWN_ARROW_KEY = 40;

  const [code, setCode] = useState(
    Array.from({ length: parseInt(fields) }).map(() => "0")
  );

  const [codeRef, setCodeRef] = useState(
    Array.from({ length: parseInt(fields) }).map(() => useRef(null))
  );

  useEffect(() => {
    console.log("codey", code);
  }, [code]);

  const modifyCode = (codeNumber, index) => {
    setCode((code) =>
      code.map((initial, codeIndex) =>
        index == codeIndex ? codeNumber.toString() : initial
      )
    );
  };

  const moveToNext = () => {
    const inputs = Array.prototype.slice.call(
      document.querySelectorAll("input")
    );
    const index = (inputs.indexOf(document.activeElement) + 1) % inputs.length;
    const input = inputs[index];
    input.focus();
    input.select();
    moveCursorToEnd(input);
  };

  const moveBack = () => {
    const inputs = Array.prototype.slice.call(
      document.querySelectorAll("input")
    );
    const index = (inputs.indexOf(document.activeElement) - 1) % inputs.length;
    const input = inputs[index];
    input.focus();
    moveCursorToEnd(input);
    input.select();
  };

  // useEffect(() => {
  //   codeRef.forEach((ref, index) => {
  //     const input = ref.current;
  //     console.log("referee", ref.current);
  //   });
  // }, [codeRef]);

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
      var range = el.createTextRange();
      range.collapse(false);
      range.select();
    }
  }

  return (
    <div>
      <p>I am code inputy</p>
      {code.map((field, index) => {
        return (
          <input
            type={"text"}
            inputMode={"numeric"}
            key={index}
            ref={codeRef[index]}
            value={code[index]}
            onFocus={(e) =>
              e.currentTarget.setSelectionRange(
                e.currentTarget.value.length,
                e.currentTarget.value.length
              )
            }
            className={styles.input}
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
                if (+number === +number) {
                  // if is a number
                  return true;
                }

                return false;
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
