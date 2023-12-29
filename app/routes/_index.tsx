import type { MetaFunction } from "@remix-run/node";
import * as stylex from "@stylexjs/stylex";
import { commonVariable } from "../variable.stylex";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const style = stylex.create({
  div: {
    fontFamily: "system-ui, sans-serif",
    lineHeight: "1.8",
  },
  h1: {
    color: commonVariable.textColor,
  },
  linkGroup: {
    display: "flex",
    justifyContent: "flex-start",
    columnGap: commonVariable["2xl"],
    listStyleType: "none",
    paddingInline: "0",
  },
  link: {
    padding: "1.25rem",
    /**
     * Using the common variable
     */
    border: `2px solid ${commonVariable.borderColor}`,
    borderRadius: "5px",
    cursor: "pointer",
  },
  linkText: {
    color: commonVariable.linkColor,
    ":hover": {
      color: commonVariable.textColor,
    },
  },
});

export default function Index() {
  return (
    <div {...stylex.props(style.div)}>
      <h1 {...stylex.props(style.h1)}>Welcome to Remix</h1>
      <ul {...stylex.props(style.linkGroup)}>
        <li {...stylex.props(style.link)}>
          <a href="/button" {...stylex.props(style.linkText)}>
            Button developed using StyleX
          </a>
        </li>
        <li {...stylex.props(style.link)}>
          <a href="/button-tw" {...stylex.props(style.linkText)}>
            Button developed using Tailwind
          </a>
        </li>
        <li {...stylex.props(style.link)}>
          <a href="/dynamic-style" {...stylex.props(style.linkText)}>
            Runtime CSS using StyleX
          </a>
        </li>
      </ul>
    </div>
  );
}
