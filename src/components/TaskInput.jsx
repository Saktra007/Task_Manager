import React, { useState } from "react";

const TaskInput = ({ AddTasks }) => {
  const [text, setText] = useState("");
  const handleTask = () => {
    if (!text.trim()) return alert("Please enter a Task!");
    AddTasks(text.trim());
    setText("");
  };
  return (
    <div className="flex justify-center p-2">
      <input
        className="border border-gray-400 p-2 rounded-md text-xs flex-grow"
        type="text"
        value={text}
        placeholder="Add a new Task..."
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-gray-500 text-white text-xs p-2 ml-2 rounded-md" onClick={handleTask}>Add New</button>
    </div>
  );
};

export default TaskInput;
