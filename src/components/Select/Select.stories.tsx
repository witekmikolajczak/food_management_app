import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import { Select } from "./Select";

export default {
  title: "Components/Select",
  component: Select,
  decorators: [withRouter],
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectStory = Template.bind({});
SelectStory.args = {
  label: true,
  labelText: "labelText",
  fnHandleSelectChange: () => console.log("select changed"),
};
