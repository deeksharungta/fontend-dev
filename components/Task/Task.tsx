import styles from "./Task.module.scss";
type TaskProps = {
  taskName: string;
};

const Task: React.FC<TaskProps> = ({ taskName }) => {
  return (
    <div className={styles.task}>
      <input type="checkbox" />
      <label>{taskName}</label>
    </div>
  );
};

export default Task;
