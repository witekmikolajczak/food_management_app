import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Product } from './Product';

import { productCollection } from '../../util/constant/productCollection';

export default {
  title: 'Components/Product',
  component: Product,
} as ComponentMeta<typeof Product>;

const Template: ComponentStory<typeof Product> = (args) => (
  <Product {...args} />
);

export const ProductStory = Template.bind({});

ProductStory.args = {
  productCollection: productCollection,
};
