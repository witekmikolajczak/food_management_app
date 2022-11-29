import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { Select } from './Select';
import { productUnitCollection } from '../../util/constant/productOptionCollection';

export default {
  title: 'Components/Select',
  component: Select,
  decorators: [withRouter],
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args} />
);

export const SelectStory = Template.bind({});
SelectStory.args = {
  label: true,
  labelText: 'labelText',
  children: <div></div>,
  fnHandleSelectChange: () => console.log('select changed'),
};
