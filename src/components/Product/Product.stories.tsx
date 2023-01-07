import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Product } from "./Product";


export default {
  title: "Components/Product",
  component: Product,
} as ComponentMeta<typeof Product>;

const Template: ComponentStory<typeof Product> = (args) => (
  <Product {...args} />
);

export const ProductStory = Template.bind({});
