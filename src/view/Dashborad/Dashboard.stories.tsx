import { withRouter } from "storybook-addon-react-router-v6";

import { Dashboard } from "./Dashboard";

export default {
  title: "Pages/Dashboard",
  component: Dashboard,
  decorators: [withRouter],
};

const Template = () => <Dashboard />;

export const Simple = Template.bind({});
