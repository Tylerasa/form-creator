import React, { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import "./AdminQuestions.css";
export default function AdminQuestion() {
  const [list, setList] = useState(1);
  const handleAdd = () => {
    setList(list + 1);
  };
  return (
    <div className="container">
      {Array.apply(null, Array(list)).map((ele, i) => {
        return <QuestionCard key={i} onAdd={handleAdd} />;
      })}
    </div>
  );
}
