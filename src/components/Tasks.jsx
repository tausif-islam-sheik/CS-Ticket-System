import ResolvedTask from "./ResolvedTask"
import TaskStatus from "./TaskStatus"

const Tasks = ({tasks}) => {
  return (
    <div className="space-y-5 px-7">
        <TaskStatus tasks={tasks} />
        <ResolvedTask />
    </div>
  )
}

export default Tasks