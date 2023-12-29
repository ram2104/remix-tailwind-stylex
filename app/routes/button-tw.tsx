import type { MetaFunction } from "@remix-run/node";
import Button from "../tailwind-button";

export const meta: MetaFunction = () => {
  return [
    { title: "Tailwind Button Component" },
    { name: "TW button example", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className=" font-sans flex flex-col items-center justify-center h-screen w-screen text-x gap-y-4">
      <p className=" font-sans text-purple-700 font-bold text-3xl ">
        Demo of the Tailwind Button Component Requirement for Reusable Button
      </p>
      <p className=" font-sans text-xs">
        Component: <br />
        <ul>
          <li>
            Consumer application should be able to update the background color /
            height
          </li>
        </ul>
      </p>
      <Button>Default stylex-Button</Button>

      <p className=" font-sans text-xs">
        Consumer App is able to update: <br />
        <ul>
          <li> Background: (Expected)</li>
          <li> Font variant: (Not-Expected)</li>
        </ul>
      </p>
      <Button className=" bg-red-700 italic" size="medium">
        Custom CSS Stylex-Button
      </Button>
    </div>
  );
}
