import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../styles/globals.css";
import Input from "./input";

export default {
  title: "Example/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input
    onChange={args.onChange}
    label={args.label}
    placeholder={args.placeholder}
    type={args.type}
    onBlur={args.onBlur}
  />
);

export const PreviewInput = Template.bind({});
PreviewInput.args = {
  label: "label",
  placeholder: "placeholder",
  type: "type",
  onChange: "onChange",
};
