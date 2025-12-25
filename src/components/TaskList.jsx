import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, handleTaskChange }) => {

  return (
    <div className="space-y-2 bg-gray-300 p-2  rounded-md min-h-48 max-h-96 overflow-y-auto">
      {tasks.length > 0 ? (
        tasks.map((item) => (
          <TaskItem
            key={item.id}
            tasks={item}
            handleTaskChange={handleTaskChange}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p className="text-gray-500 text-center p-6">No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
