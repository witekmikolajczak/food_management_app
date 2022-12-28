import { withRouter } from "storybook-addon-react-router-v6";

import { AddProduct } from "./AddProduct";

export default {
  title: "Pages/AddProduct",
  component: AddProduct,
  decorators: [withRouter],
};

const Template = () => <AddProduct />;

export const Simple = Template.bind({});
