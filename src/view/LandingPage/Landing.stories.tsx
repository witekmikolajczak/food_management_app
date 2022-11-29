import { withRouter } from 'storybook-addon-react-router-v6';

import { LandingPage } from './LandingPage';

export default {
  title: 'Pages/LandingPage',
  component: LandingPage,
  decorators: [withRouter],
};

const Template = () => <LandingPage />;

export const Simple = Template.bind({});
