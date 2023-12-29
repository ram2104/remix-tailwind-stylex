import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export type TWButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style">;

/**
 * borderRadius: "0.25rem",
    color: "purple",
    background: "white",
    border: "1px solid black",
    padding: "0.5rem",
    cursor: "pointer",
    ":hover": {
      background: "purple",
      color: "white",
      border: "1px solid purple",
    },
 */

export default (props: TWButtonProps) => {
  const {
    children,
    size = "small",
    className: consumerStyle = "",
    ...rest
  } = props;
  return (
    <button
      {...rest}
      className={twMerge(
        ` font-sans bg-white p-2 cursor-pointer rounded border-solid border-black border text-purple-700 hover:bg-purple-700 hover:text-white hover:border-purple-700 ${clsx(
          {
            "h-8": size === "small",
            "h-12": size === "medium",
            "h-16": size === "large",
          }
        )}`,
        consumerStyle
      )}
    >
      {children}
    </button>
  );
};
