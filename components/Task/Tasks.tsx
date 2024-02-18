import Task from "./Task";
import styles from "./Tasks.module.scss";

const Tasks: React.FC = () => {
  const tasks = [
    {
      id: 1,
      taskName: "Frontend",
    },
    {
      id: 2,
      taskName: "Review the Design",
    },
    {
      id: 3,
      taskName: "Estimate the time",
    },
    {
      id: 4,
      taskName: "Code UI",
    },
    {
      id: 5,
      taskName: "Testing",
    },
    {
      id: 6,
      taskName: "Submit",
    },
  ];
  return (
    <div className={styles.container}>
      <h2>Today&apos;s Task</h2>
      <div className={styles.tasks}>
        {tasks.map((task) => (
          <Task key={task.id} taskName={task.taskName} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
