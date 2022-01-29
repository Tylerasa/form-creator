import React, { useState, useRef } from "react";
import Radio from "./Radio";
import Multiple from "./Multiple";
import Text from "./Text";
import "./QuestionCard.css";
const QuestionCard = () => {
  const selectRef = useRef();
  let i = 0;
  const [showInput, setShowInput] = useState(false);
  const [qType, setQType] = useState("multiple choice");
  const handleClick = () => {
    setShowInput(!showInput);
  };
  const handleSelect = () => {
    i = i + 1;
    if (i % 2 === 0) {
      selectRef.current.classList.add("open");
    } else {
      selectRef.current.classList.remove("open");
    }
  };
  return (
    <div className="question-card">
      <div className="wrapper">
        <div className="input-wrapper">
          {!showInput ? (
            <p onClick={handleClick} className="enter-text">
              Enter Your Question Here
            </p>
          ) : (
            <input type="text" />
          )}
        </div>
        <div onClick={handleSelect} className="select-wrapper">
          <div ref={selectRef} className="select">
            <div className="select__trigger">
              <span className="seleted-value">{qType.toUpperCase()}</span>
              <div className="arrow"></div>
            </div>
            <div className="custom-options">
              <span
                onClick={() => setQType("multiple choice")}
                className= {`custom-option ${qType === "multiple choice"?  "selected": ""}`}

                data-value="choice"
              >
                Multiple choice
              </span>
              <span
                onClick={() => setQType("radio")}
                className= {`custom-option ${qType === "radio"?  "selected": ""}`}

                className="custom-option"
                data-value="Radio"
              >
                Radio
              </span>
              <span
                onClick={() => setQType("text")}
                className= {`custom-option ${qType === "text"?  "selected": ""}`}
                data-value="text"
              >
                Text
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="question-field">
        {qType === "multiple choice" && <Multiple />}
        {qType === "radio" && <Radio />}
        {qType === "text" && <Text />}
      </div>
      <div className="sidebar"></div>
    </div>
  );
};

export default QuestionCard;
