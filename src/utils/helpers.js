// utils.js

// Function to retrieve tasks from local storage

export const getTasksFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("tasks"));
};

// Function to save tasks to local storage
export const saveTasksToLocalStorage = (tasks) => {
  return localStorage.setItem("tasks", JSON.stringify(tasks));
};
