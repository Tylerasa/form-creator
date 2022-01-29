import React, { useState } from "react";

const Multiple = () => {
  const [list, setList] = useState(["Option 1"]);
  const handleClick = () => {
    setList([...list, `Option ${list.length + 1}`]);
  };
  return (
    <div>
      {list.map((ele, i) => {
        return (
          <div key={i}>
            <input type="checkbox" />
            <label htmlFor="html">{ele} </label> <br />
          </div>
        );
      })}
      <span
        onClick={handleClick}
        style={{
          color: "#394a6d",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        "...add another option"
      </span>
    </div>
  );
};

export default Multiple;
