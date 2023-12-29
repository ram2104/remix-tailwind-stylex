import type { MetaFunction } from "@remix-run/node";
import * as stylex from "@stylexjs/stylex";
import Button from "../button";
import { commonVariable } from "../variable.stylex";

export const meta: MetaFunction = () => {
  return [
    { title: "Button Component" },
    { name: "button example", content: "Welcome to Remix!" },
  ];
};

const style = stylex.create({
  header: {
    fontSize: "2rem",
    color: commonVariable.linkColor,
    fontWeight: "bold",
    fontFamily: "system-ui, sans-serif",
  },
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    padding: "2rem",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    rowGap: "1rem",
  },
  button: {
    color: "#fff",
    backgroundColor: "red",
  },
  info: {
    fontSize: "0.75rem",
    color: "black",
    fontFamily: "system-ui, sans-serif",
  },
});

export default function Index() {
  return (
    <div {...stylex.props(style.wrapper)}>
      <p {...stylex.props(style.header)}>
        Demo of the Stylex Button Component Requirement for Reusable Button
      </p>
      <p {...stylex.props(style.info)}>
        Component: <br />
        <ul>
          <li>
            Consumer application should be able to update the background color
          </li>
        </ul>
      </p>
      <Button>Default stylex-Button</Button>
      <p {...stylex.props(style.info)}>
        Consumer App is able to update: <br />
        <ul>
          <li> Background: (Allowed)</li>
          <li> Font variant: (Not-Allowed)</li>
          <li>
            Note: You might also see that there is no hover effect on the custom
            button because the consumer-app is sending "red" color which is
            given higher priority.
          </li>
        </ul>
      </p>
      <Button style={style.button} size="medium">
        Custom CSS Stylex-Button
      </Button>
    </div>
  );
}
