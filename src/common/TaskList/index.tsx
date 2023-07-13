import { useState } from "react";
import { Task } from "../Task";
import { AddTask } from "../AddTask";
import { CompletedTasks } from "../FilterButton";

export type TaskType = {
  title: string;
  isCompleted: boolean;
  id: string;
};

const todos = [
  {
    title: "Сделать тестовое задание",
    isCompleted: false,
    id: "124",
  },
  {
    title: "Подготовиться к техническому собеседованию",
    isCompleted: false,
    id: "12443",
  },
  {
    title: "Новый день - новые знания",
    isCompleted: false,
    id: "124htr",
  },
  {
    title: "Создать новый пет-проект",
    isCompleted: false,
    id: "124rt",
  },
];

export const TaskList = function TaskList() {
  const [task, setTask] = useState<TaskType[]>(todos);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const changeTask = (id: string) => {
    const copy = [...task];
    const current = copy.find((task) => task.id === id);
    current!.isCompleted = !current!.isCompleted;
    setTask(copy);
  };

  const deleteTask = (id: string) => {
    setTask([...task].filter((task) => task.id != id));
  };

  return (
    <div className="grid gap-y-6">
      {task.map((task: TaskType) => (
        <Task
          showFilterTasks={showFilter}
          key={task.id}
          title={task.title}
          isComplited={task.isCompleted}
          changeTask={() => changeTask(task.id)}
          deleteTask={() => deleteTask(task.id)}
        />
      ))}
      <CompletedTasks filterTask={() => setShowFilter(!showFilter)} showFilterTask={showFilter} />
      <AddTask setTask={setTask} task={task} />
    </div>
  );
};
