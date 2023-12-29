import * as stylex from "@stylexjs/stylex";
import { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Suppose we're developing the "Button" Component
 *   - It can all the props of the native-button element except "className" & "style"
 *   - It has three variants
 *   - The consumer app can only customise "background-color" & 'color'
 *   - We should always gurrante that the consumer app style-token is always applied if it's passed
 *
 */

export type StyleXButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  style?: stylex.StyleXStyles<{
    backgroundColor?: string;
    color?: "#fff" | "#ccc" | "#000";
  }>;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "style">;

const styleToken = stylex.create({
  default: {
    borderRadius: "0.25rem",
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
  },
  dynamic: (variant: StyleXButtonProps["size"]) => ({
    height:
      variant === "small" ? "2rem" : variant === "medium" ? "3rem" : "4rem",
  }),
  /**
   * Return statement isn't allowed for the dynamic CSS. We need to go with inline return.
   * Stylex is working on this to improvise this better.
   * Default value with {} isn't allowed for the argument.
   * https://github.com/facebook/stylex/issues/198
   */
  // dynamic: (variant: Required<StyleXButtonProps["size"]>) => {
  //   if (variant === "small") {
  //     return { height: "1rem" };
  //   } else if (variant === "medium") {
  //     return { height: "2rem" };
  //   }
  //   return { height: "3rem" };
  // },
});

export default (props: StyleXButtonProps) => {
  const { children, size = "small", style: consumerStyle, ...rest } = props;
  return (
    <button
      {...rest}
      {...stylex.props(
        styleToken.default,
        styleToken.dynamic(size),
        consumerStyle
      )}
    >
      {children}
    </button>
  );
};
