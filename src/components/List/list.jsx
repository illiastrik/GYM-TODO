import Task from "../tasks/tasks";
import "./list.css";
import meHello from "./../../assets/meHello.png";

const List = ({
  userTask,
  editingTask,
  editingTaskId,
  setEditingTask,
  setEditingTaskId,
  setUserTask,
  handleEditTask,
  handleSaveTask,
  handleDeleteTask,
  handleCompleteTask,
}) => {
  return (
    <ul className="list">
      {userTask.length === 0 ? (
        <div className="zero-task">
          <img src={meHello} alt="No tasks available" className="me-hello" />
          <span className="zero-text">
            А ну скоріш вписав план на тренування, КАЧОК
          </span>
        </div>
      ) : (
        userTask.map((task) => (
          <Task
            key={task.id}
            task={task}
            editingTask={editingTask}
            editingTaskId={editingTaskId}
            setEditingTask={setEditingTask}
            setEditingTaskId={setEditingTaskId}
            setUserTask={setUserTask}
            handleEditTask={handleEditTask}
            handleSaveTask={handleSaveTask}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
          />
        ))
      )}
    </ul>
  );
};

export default List;
