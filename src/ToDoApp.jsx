import { useState, useEffect } from "react";
import List from "./components/List/list";
import AddTask from "./components/AddTask/addTask";

const ToDoApp = () => {
  // Отримуємо дані з localStorage при завантаженні сторінки
  const savedTasks = localStorage.getItem("tasks");
  const initialTasks = savedTasks
    ? JSON.parse(savedTasks)
    : [
        { id: 1, task: "Завдання 1", completed: false },
        { id: 2, task: "Завдання 2", completed: false },
        { id: 3, task: "Завдання 3", completed: false },
      ];

  const [userTask, setUserTask] = useState(initialTasks);
  const [newUserTask, setNewUserTask] = useState("");
  const [editingTask, setEditingTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const updateLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  useEffect(() => {
    updateLocalStorage(userTask);
  }, [userTask]);

  const handleCompleteTask = (id) => {
    const updatedTasks = userTask.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setUserTask(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = userTask.filter((task) => task.id !== id);
    setUserTask(updatedTasks);
  };

  const handleEditTask = (id) => {
    setEditingTaskId(id);
    const task = userTask.find((task) => task.id === id);
    setEditingTask(task.task);
  };

  const handleSaveTask = () => {
    const updatedTasks = userTask.map((task) =>
      task.id === editingTaskId ? { ...task, task: editingTask } : task
    );
    setUserTask(updatedTasks);
    setEditingTask("");
    setEditingTaskId(null);
  };

  const handleAddTask = () => {
    if (newUserTask.trim() === "") {
      return;
    }
    const addTask = {
      id: Date.now(), // Генеруємо унікальний id
      task: newUserTask,
      completed: false,
    };
    const updatedTasks = [...userTask, addTask];
    setUserTask(updatedTasks);
    setNewUserTask("");
  };

  return (
    <main className="todo">
      <h1 className="main-title">СПИСОК ТРЕНУВАННЯ</h1>
      <List
        handleDeleteTask={handleDeleteTask}
        userTask={userTask}
        editingTask={editingTask}
        editingTaskId={editingTaskId}
        setEditingTask={setEditingTask}
        setEditingTaskId={setEditingTaskId}
        setUserTask={setUserTask}
        handleEditTask={handleEditTask}
        handleSaveTask={handleSaveTask}
        handleCompleteTask={handleCompleteTask}
      />
      <AddTask
        userTask={userTask}
        setUserTask={setUserTask}
        newUserTask={newUserTask}
        setNewUserTask={setNewUserTask}
        handleAddTask={handleAddTask}
      />
    </main>
  );
};

export default ToDoApp;
