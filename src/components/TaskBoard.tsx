import clipboardIcon from "../assets/clipBoardIcon.svg";
import styles from "./taskBoard.module.css";

interface ITaskBoardProps {
    tasks: string[];  // List of tasks to display in the task board
}
export function TaskBoard({tasks}: ITaskBoardProps) {

    return(
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
    )
}