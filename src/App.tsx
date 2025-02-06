import "./globals.css";
import styles from "./app.module.css";

import logo from "./assets/logo.svg";
import addIcon from "./assets/addIcon.svg"
import clipboardIcon from "./assets/clipBoardIcon.svg"
import { useState } from "react";

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
          <div className={styles.tasksBoard}>
            <div className={styles.informationContainer}>
              <div className={styles.info}>
                <p className={styles.blue}>Tarefas criadas</p>
                <p className={styles.counter}>0</p>
              </div>

              <div className={styles.info}>
                <p className={styles.purple}>Concluídas</p>
                <p className={styles.counter}>0</p>
              </div>
            </div>
            <div className={styles.tasksContainer}>
              {
                tasks.length > 0 ? tasks.map((task) => {
                  return (
                    <div key={task} className={styles.task}>
                      <p>{task}</p>
                    </div>
                  )
                })

                :

                <>
                  <img src={clipboardIcon} alt="" />
              <p><b>Você ainda não tem tarefas cadastradas</b></p>
              <p>Crie tarefas e organize seus itens a fazer</p>
                </>
              }
            </div>
          </div>
        </section>
    </div>  
  )
}

export default App
