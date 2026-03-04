import ResolvedTask from "./ResolvedTask"
import TaskStatus from "./TaskStatus"

const Tasks = ({tasks, setResolved, setProgress, resolvedTask, setResolvedTask, handleTasks}) => {
  return (
    <div className="space-y-5 px-2">
        <TaskStatus tasks={tasks} setResolved={setResolved} setProgress={setProgress} resolvedTask={resolvedTask} setResolvedTask={setResolvedTask} handleTasks={handleTasks} />
        <ResolvedTask resolvedTask={resolvedTask} />
    </div>
  )
}

export default Tasks