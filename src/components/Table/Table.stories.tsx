import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from './Table';
import { LATEST_RECIPT } from '../../features/constant/latestRecipt';
import { AiOutlineLaptop } from 'react-icons/ai';

export default {
  title: 'Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <Table {...args} />
);

export const TableStory = Template.bind({});

// TableStory.args = {
//   tHeadCollection: renderLatestReciptTableHeaders(),
//   tBodyCollection: renderReciptCollectionTable(),
//   text: 'Ostatnio przeglądane przepisy',
//   icon: <AiOutlineLaptop size={25} />,
//   fnHandleClick: (recipt) => console.log(recipt),
// };
