const TaskItem = ({ tasks, onDelete, handleTaskChange }) => {
  return (
    <div className="flex items-center justify-between transition-all duration-500 bg-white py-3 px-6 hover:scale-95 rounded-md shadow-md group">
      <label htmlFor={tasks.id} >
        <input
          type="checkbox"
          checked={tasks.complete}
          onChange={() => handleTaskChange(tasks.id)}
          id={tasks.id}
          className="mr-2"
        />
        <span className={`text-lg ${tasks.complete?"line-through text-gray-400":"text-gray-800"}`}>{tasks.texts}</span>
      </label>
      <button className="border-2 p-2 text-sm rounded-md bg-red-600 opacity-0 group-hover:opacity-100 transition-all duration-500" onClick={() => onDelete(tasks.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
