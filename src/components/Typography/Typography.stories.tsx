import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const TypographyStory = Template.bind({});

TypographyStory.args = {
  text: "Liczba przepisów",
  variant: "h1",
};
