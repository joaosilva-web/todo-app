import "./globals.css";
import styles from "./app.module.css";

import logo from "./assets/logo.svg";
import addIcon from "./assets/addIcon.svg"
import { useState } from "react";
import { TaskBoard } from "./components/TaskBoard";

function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  function handleInputTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }


  function handleSubmitNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if(!newTask.trim()) return;

    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  return (
    <div className={styles.container}>
        <header className={styles.header}>
          <img src={logo} alt="" />
        </header>
        <section className={styles.content}>
          <form className={styles.addTaskForm} onSubmit={handleSubmitNewTask}>
            <input type="text" placeholder="Adicione uma nova tarefa" value={newTask} onChange={handleInputTaskChange}/>
            <button className={styles.addTaskBtn} type="submit"><p>Criar</p><img src={addIcon} alt="" /></button>
          </form>
            <TaskBoard tasks={tasks}/>
        </section>
    </div>  
  )
}

export default App
