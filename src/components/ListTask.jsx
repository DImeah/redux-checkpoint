import { useSelector } from "react-redux";
import Task from "./Task";

const ListTasks = () => {
  // Retrieve the list of tasks from the Redux store
  const tasks = useSelector((state) => state.task.userTask);

  // Display a message if there are no tasks
  return tasks?.length === 0 ? (
    <p>You have no task</p>
  ) : (
    // Display the list of tasks
    <div>
      {tasks?.map((item) => (
        <Task key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListTasks;
