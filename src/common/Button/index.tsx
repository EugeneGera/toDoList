import classNames from "classnames";
import Image from "next/image";

export const Button = function Button(props: {
  src: string;
  alt: string;
  className?: string;
  onClick?: VoidFunction;
  type?: "button" | "submit" | "reset";
  text?: string;
}) {
  return (
    <button
      className={classNames(props.className, {
        "grid grid-flow-col justify-self-end gap-x-2 rounded-md p-1 hover:bg-gray-200 dark:hover:bg-fuchsia-500 dark:bg-fuchsia-600":
          props.text,
      })}
      onClick={props.onClick}
      type={props.type}
    >
      {props.text}

      <Image
        src={props.src}
        alt={props.alt}
        width={25}
        height={25}
        className={classNames("rounded-md", {
          "hover:bg-gray-200 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-500": !props.text,
        })}
      />
    </button>
  );
};
