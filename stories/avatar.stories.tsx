import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../styles/globals.css";
import Avatar from "./avatar";

export default {
  title: "Example/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <img onClick={args.onClick} src={args.src} alt={args.src} />
);

export const PreviewAvatar = Template.bind({});
PreviewAvatar.args = {
  src: "src",
  alt: "alt",
};
