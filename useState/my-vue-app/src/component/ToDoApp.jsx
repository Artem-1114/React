import { useState } from "react";
import "./ToDoApp.css";
const TodoApp = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !description.trim()) return;

        const newTask = { id: Date.now(), title, description };
        setTasks([...tasks, newTask]);

        setTitle("");
        setDescription("");
    };

    return (
        <div className="todo-app">
            <h1 className="tack">Список задач</h1>
            <form onSubmit={handleSubmit} className="form ">
                <input
                    type="text"
                    placeholder="Назва задачі"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-input"
                />
                <input
                    type="text"
                    placeholder="Опис задачі"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-input"
                />
                <button type="submit" className="form-button">
                    Додати
                </button>
            </form>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id} className="task">
                        <strong>{task.title}</strong>: {task.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;