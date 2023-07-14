import { Button } from "../Button";

export const CompletedTasks = function CompletedTasks(props: {
  filterTask: VoidFunction;
  showFilterTask: boolean;
  className?: string;
  disabled: boolean
}) {
  return (
    <Button
      disabled={props.disabled}
      src="filter.svg"
      alt="filter"
      onClick={props.filterTask}
      text={`Показать ${props.showFilterTask ? "все" : "невыполненные"} задачи`}
      className={props.className}
    />
  );
};
