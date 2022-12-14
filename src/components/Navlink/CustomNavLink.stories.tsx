import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CustomNavLink } from "./CustomNavLink";

import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Components/NavLink",
  component: CustomNavLink,
  decorators: [withRouter],
} as ComponentMeta<typeof CustomNavLink>;

const Template: ComponentStory<typeof CustomNavLink> = (args) => (
  <CustomNavLink {...args} />
);

export const NavLink = Template.bind({});