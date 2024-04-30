import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {ToDoListComponent} from "./to-do-list.component";



const meta: Meta<ToDoListComponent> = {
  title: 'UI Components/ToDoListComponent',
  component: ToDoListComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
    componentWrapperDecorator(
      (story) => `<div>${story}</div>`
    ),
  ],
  render: (args: ToDoListComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<ToDoListComponent>;

export const Primary: Story = {
  args: {
  },
};
