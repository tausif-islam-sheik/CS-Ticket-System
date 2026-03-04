import toast from "react-hot-toast";

const TaskStatus = ({
  tasks,
  setResolved,
  setProgress,
  setResolvedTask,
  handleTasks,
}) => {
  const handleComplete = (task) => {
    // Add to resolved list
    setResolvedTask((prev) => [...prev, task]);

    // Increase resolved count safely
    setResolved((prev) => prev + 1);

    // Decrease progress safely
    setProgress((prev) => prev - 1);

    // Remove from Task Status
    handleTasks(task.id);

    // React Hot Toast
    toast.success("Successfully Complete Task!");
  };

  return (
    <div className="space-y-4">
      <h1 className="font-bold text-xl">Task Status</h1>

      {/* If no tasks */}
      {tasks.length === 0 && (
        <p className="text-gray-500">Select a ticket to add to Task Status</p>
      )}

      {/* Task Cards */}
      {tasks.map((task) => (
        <div
          key={task.id}
          className="card bg-base-100 shadow-md border border-base-200"
        >
          <div className="card-body p-5 space-y-4">
            <h2 className="text-lg font-semibold">{task.title}</h2>

            <button
              onClick={() => handleComplete(task)}
              className="btn bg-green-600 w-full text-white"
            >
              Complete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;
