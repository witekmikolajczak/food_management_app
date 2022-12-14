import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "./Card";

import { productCollection } from "../../features/constant/productCollection";
import { Counter } from "../Counter/Counter";
import { AiFillAccountBook } from "react-icons/ai";

export default {
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const ProductStory = Template.bind({});

ProductStory.args = {
  icon: <AiFillAccountBook />,
  text: "Liczba przepisów",
  children: <Counter delay={50} min={0} max={200} />,
};
