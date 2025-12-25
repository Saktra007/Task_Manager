const FilterBar = ({ setFilter, filter }) => {
  return (
    <div className="flex justify-center space-x-4 my-4">
      <button className={`w-28 px-4 py-2 border-2 border-gray-500 transition-colors duration-500 rounded-md ${filter === "All" ? "bg-gray-500 text-white" : "hover:bg-gray-300"}`} onClick={() => setFilter("All")}>
        All
      </button>
      <button className={`w-28 px-4 py-2 border-2 border-gray-500 transition-colors duration-500 rounded-md ${filter === "Active" ? "bg-gray-500 text-white" : "hover:bg-gray-300"}`} onClick={() => setFilter("Active")}>
        Active
      </button>
      <button className={`w-28 px-4 py-2 border-2 border-gray-500 transition-colors duration-500 rounded-md ${filter === "Completed" ? "bg-gray-500 text-white" : "hover:bg-gray-300"}`} onClick={() => setFilter("Completed")}>
        Completed
      </button>
    </div>
  );
};

export default FilterBar;
