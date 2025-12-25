import React, { useEffect, useMemo, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState("All");
  const AddTasks = (text) => {
    setTasks([...tasks, { id: Date.now(), texts: text, complete: false }]);
  };
  const onDelete = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const filteredTasks = useMemo(
    () =>
      tasks.filter((item) => {
        switch (filter) {
          case "Active":
            return !item.complete;
          case "Completed": {
            return item.complete;
          }
          default:
            return true;
        }
      }),
    [tasks, filter]
  );
  const handleTaskChange = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  };
  const countTasks = useMemo(
    () => ({
      All: tasks.length,
      Active: tasks.filter((item) => !item.complete).length,
      Completed: tasks.filter((item) => item.complete).length,
    }),
    [tasks]
  );
  return (
    <div className="min-h-screen p-4 bg-gray-200">
      <div className="max-w-lg bg-white mx-auto p-6 rounded-md shadow-md min-h-96">
        <h1 className="text-xl text-center mb-2 font-bold">Task Manager</h1>
        <TaskInput AddTasks={AddTasks} />
        {tasks.length > 0 && (
          <div className="flex justify-around my-4 border-2 px-2 py-4 shadow-lg rounded-md text-center w-full">
            <p className="w-32 text-xs p-2 bg-red-200 shadow-md rounded-md">
              Total Tasks: {countTasks.All}
            </p>
            <p className="w-32 text-xs p-2 bg-blue-200 shadow-md rounded-md">
              Active Tasks: {countTasks.Active}
            </p>
            <p className="w-32 text-xs bg-gray-200 p-2 rounded-md">
              Completed Tasks: {countTasks.Completed}
            </p>
          </div>
        )}
        <FilterBar setFilter={setFilter} filter={filter} />
        <TaskList
          tasks={filteredTasks}
          handleTaskChange={handleTaskChange}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
};

export default App;
