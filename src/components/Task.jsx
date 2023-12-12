import React from "react";
import { useDispatch } from "react-redux";
import {
  editSelectedTask,
  resetFilters,
  updateTaskStatus,
} from "../features/task/taskSlice";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import {
  getTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "/src/utils/helpers.js";

const Task = ({ description, isDone, id }) => {
  // Redux dispatch setup
  const dispatch = useDispatch();

  // Handle checkbox change to update task status
  const handleCheck = () => {
    const storedTasks = getTasksFromLocalStorage();

    const result = storedTasks.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    // Dispatch action to update task status in Redux store
    dispatch(updateTaskStatus(result));
    // Save updated tasks to local storage
    saveTasksToLocalStorage(result);
  };

  // Find and select tasks for editing
  const findSelectedTasksForEditing = () => {
    const storedTasks = getTasksFromLocalStorage();
    const result = storedTasks.find((item) => item.id === id);
    // Dispatch action to edit selected task in Redux store
    dispatch(editSelectedTask(result));
  };

  // Delete the task
  const deleteTask = () => {
    const storedTasks = getTasksFromLocalStorage();
    const result = storedTasks.filter((item) => item.id !== id);
    // Save updated tasks to local storage
    saveTasksToLocalStorage(result);
    // Dispatch action to reset filters in Redux store
    dispatch(resetFilters());
  };

  // Render the task component
  return (
    <div className="flex items-center gap-6 justify-between mb-2">
      <div className="flex gap-4">
        {/* Checkbox for task status */}
        <input type="checkbox" checked={isDone} onChange={handleCheck} />
        {/* Task description */}
        <p>{description} </p>
      </div>
      <div className="flex gap-4">
        {/* Buttons for editing and deleting tasks */}
        <button onClick={findSelectedTasksForEditing}>
          {/* Edit icon */}
          <CiEdit />
        </button>
        <button onClick={deleteTask}>
          {/* Delete icon with red color */}
          <MdOutlineDelete color="red" />
        </button>
      </div>
    </div>
  );
};

export default Task;
