import "./addTask.scss";
import plus from "./../../assets/plus.svg";

const AddTask = ({ userTask, setUserTask, newUserTask, setNewUserTask }) => {
  const handleAddTask = () => {
    if (newUserTask.trim() === "") {
      return;
    }
    const addTask = {
      id: Date.now(),
      task: newUserTask,
    };

    setUserTask([...userTask, addTask]);
    setNewUserTask("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAddTask();
  };
  return (
    <div className="form__group field">
      <input
        className="form__field"
        onChange={(e) => setNewUserTask(e.target.value)}
        type="input"
        placeholder="Завдання"
        id="task"
        value={newUserTask}
        onKeyDown={handleKeyDown}
        maxLength={18}
      />
      <label className="form__label" htmlFor="task">
        Завдання
      </label>
      <button onClick={handleAddTask}>
        <img src={plus} alt="" />
      </button>
    </div>
  );
};

export default AddTask;
