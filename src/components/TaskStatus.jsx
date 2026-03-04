const TaskStatus = ({ tasks }) => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold text-xl">Task Status</h1>
      {tasks.map((task) =>
        task ? (
          <div className="card bg-base-100 shadow-md border border-base-200">
            <div className="card-body p-5 space-y-4">
              {/* Title */}
              <h2 className="text-lg font-semibold">{task.title}</h2>

              {/* Button */}
              <button className="btn bg-green-600 w-full text-white">
                Complete
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Select a ticket to add to Task Status</p>
        ),
      )}
    </div>
  );
};

export default TaskStatus;
