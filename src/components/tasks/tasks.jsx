import redTarget from "./../../assets/red-tar.svg";
import greenTarget from "./../../assets/green-tar.svg";
import trash from "./../../assets/trash.svg";
import redactor from "./../../assets/redactor.svg";
import save from "./../../assets/cogwhell.svg";
import "./tasks.css";
const Task = ({
  task,
  editingTask,
  editingTaskId,
  setEditingTask,
  setEditingTaskId,
  handleEditTask,
  handleSaveTask,
  handleDeleteTask,
  handleCompleteTask,
}) => {
  const handleSave = () => {
    handleSaveTask();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSaveTask();
  };

  const handleEdit = () => {
    handleEditTask(task.id);
  };

  const handleComplete = () => {
    handleCompleteTask(task.id);
  };

  return (
    <li className={`task ${task.completed ? "completed" : ""}`}>
      {editingTask && editingTaskId === task.id ? (
        <>
          <input
            className="rd-task"
            onKeyDown={handleKeyDown}
            type="input"
            value={editingTask}
            onChange={(e) => {
              setEditingTask(e.target.value);
            }}
            maxLength={18}
          />
          <button onClick={handleSave}>
            <img src={save} alt="SAVE" />
          </button>
        </>
      ) : (
        <div className="task-row">
          <button className="btn-comp" onClick={handleComplete}>
            <img
              src={task.completed ? greenTarget : redTarget}
              alt="target icon"
            />
          </button>
          <p className="task-text">{task.completed ? task.task : task.task}</p>
          <div className="task-btns">
            <button onClick={handleEdit}>
              <img src={redactor} alt="" />
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>
              <img src={trash} alt="" />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Task;
