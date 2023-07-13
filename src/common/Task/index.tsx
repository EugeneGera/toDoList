import classNames from "classnames";
import { Button } from "../Button";

export const Task = function Task(props: {
  title: string;
  isComplited: boolean;
  changeTask?: VoidFunction
  deleteTask?: VoidFunction,
  showFilterTasks: boolean
}) {
  return (
      <div
        className={classNames("grid grid-flow-col rounded-lg p-6 shadow dark:ring-1 dark:ring-fuchsia-800", {
          "opacity-40": props.isComplited,
          "hidden": props.showFilterTasks && props.isComplited
        })}
      >
        <p className="self-center">{props.title}</p>

        <div className="grid grid-flow-col gap-x-3 place-content-end">
          <Button src="complited.svg" alt="complited" onClick={props.changeTask} />
          <Button src="deleted.svg" alt="deleted" onClick={props.deleteTask} />
        </div>
      </div>
  );
};
