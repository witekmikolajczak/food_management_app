import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CustomInput } from "./CustomInput";

export default {
  title: "Components/Input",
  component: CustomInput,
} as ComponentMeta<typeof CustomInput>;

const Template: ComponentStory<typeof CustomInput> = (args) => (
  <CustomInput {...args} />
);

export const InputStory = Template.bind({});

InputStory.args = {
  label: true,
  labelText: "labelText",
  className: "",
  placeholder: "Placeholder",
  name: "Name",
  value: "",
  fnHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => e,
};
