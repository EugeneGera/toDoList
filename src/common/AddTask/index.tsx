import { Button } from "../Button";
import { Dispatch, SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TaskType } from "../TaskList";

type FormValue = {
  title: string;
  id: string;
  isCompleted: boolean;
};

export const AddTask = function AddTask(props: {
  setTask: Dispatch<SetStateAction<TaskType[]>>,
  task: TaskType[];
}) {

  // React-Hook-Form set default values.
  const { handleSubmit, register, reset } = useForm<FormValue>({
    defaultValues: {
      title: "",
      id: "",
      isCompleted: false,
    },
    mode: "onChange",
  });

  // Function of submit. Add to state new object.
  const addNewTask: SubmitHandler<FormValue> = (data) => {
    const setTask = props.setTask
    setTask([...props.task, ...[{title: data.title, id: Date(), isCompleted: false}]])
    reset()
    
  };

  return (
    <form
      className="grid grid-flow-col place-content-center gap-x-4"
      onSubmit={handleSubmit(addNewTask)}
    >
      <input
        {...register('title')}
        type="text"
        className="h-10 w-96 appearance-none rounded-md px-3 text-sm ring-1 ring-gray-300 dark:ring-fuchsia-500"
        placeholder="Что ещё нужно сделать?"
      />
      <Button type="submit" src="added.svg" alt="add" className="grid self-center" />
    </form>
  );
};
