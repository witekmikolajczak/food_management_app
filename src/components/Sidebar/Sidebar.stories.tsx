import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { Sidebar } from './Sidebar';
import { SIDEBAR_LINKS_COLLECTION } from '../../features/constant/links';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  decorators: [withRouter],
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const SidebarStory = Template.bind({});
SidebarStory.args = {
  linksCollection: SIDEBAR_LINKS_COLLECTION,
};
