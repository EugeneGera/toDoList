import { Button } from "../Button";

export const CompletedTasks = function CompletedTasks(props: {
  filterTask: VoidFunction;
  showFilterTask: boolean;
}) {
  return (
      <Button
        src="filter.svg"
        alt="filter"
        onClick={props.filterTask}
        text={`Показать ${
          props.showFilterTask ? "все" : "невыполненные"
        } задачи`}
      />
  );
};
