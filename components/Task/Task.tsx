import styles from "./Task.module.scss";
type TaskProps = {
  taskName: string;
  id: number;
};

const Task: React.FC<TaskProps> = ({ taskName, id }) => {
  return (
    <div className={styles.task}>
      <input id={String(id)} type="checkbox" />
      <label htmlFor={String(id)}>{taskName}</label>
    </div>
  );
};

export default Task;
