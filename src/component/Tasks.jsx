import Task from "./Task";

const Tasks = ({tasks, onDelete, onReminder}) => {
  return (
    <div>
      {tasks.map(task => (
          <Task key = {task.id} task = {task} onDelete = {onDelete} onReminder = {onReminder}></Task>
      ))}
    </div>
  );
};

export default Tasks;
 