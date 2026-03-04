const ResolvedTask = ({ resolvedTask }) => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold text-xl">Resolved Task</h1>
      {resolvedTask.length === 0 && (
        <p className="text-gray-500">No resolved tasks yet.</p>
      )}
      {resolvedTask.map((task) => (
        <div>
          <p className="border-2 border-green-600 font-semibold p-2 py-3 rounded-lg">
            {task.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ResolvedTask;
