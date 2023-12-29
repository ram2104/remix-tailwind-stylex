import type { MetaFunction } from "@remix-run/node";
import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
import { commonVariable } from "../variable.stylex";

export const meta: MetaFunction = () => {
  return [{ title: "Dynamic Stylex Example" }];
};

const style = stylex.create({
  header: {
    fontSize: "2rem",
  },
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    minWidth: "100vw",
    padding: commonVariable["2xl"],
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    rowGap: "1rem",
  },
  button: {
    width: "fit-content",
    height: "30px",
    background: commonVariable.borderColor,
    color: "black",
    border: `1px soild ${commonVariable.borderColor}`,
    cursor: "pointer",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    border: `1px solid ${commonVariable.borderColor}`,
    borderRadius: "0.25rem",
    padding: "1rem",
    color: "white",
    background: commonVariable.purpleBackground,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "system-ui, sans-serif",
  },
  bar: (height) => ({
    height,
  }),
});

export default function Index() {
  // The value of `height` cannot be known at compile time.
  const [height, setHeight] = useState(30);
  return (
    <div {...stylex.props(style.wrapper)}>
      <section {...stylex.props(style.bar(height), style.section)}>
        Dynamic Element using StyleX
      </section>
      <button
        onClick={() => setHeight((height) => height + 10)}
        {...stylex.props(style.button)}
      >
        Increase the height
      </button>
    </div>
  );
}
