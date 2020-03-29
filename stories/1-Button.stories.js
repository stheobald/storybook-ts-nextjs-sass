import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import RoundButton from "../src/components/RoundButton";

export default {
  title: "Button",
  component: Button
};

// export const Text = () => (
//   <Button onClick={action("clicked")}>Hello Button</Button>
// );

export const Emoji = () => (
  <React.Fragment>
    {/* <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button> */}
    <RoundButton label="a button" />
  </React.Fragment>
);
