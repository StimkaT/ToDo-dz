import { componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import {ToDoCreateFormComponent} from "./to-do-create-form.component";


const meta: Meta<ToDoCreateFormComponent> = {
  title: 'UI Components/ToDoCreateFormComponent',
  component: ToDoCreateFormComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
    componentWrapperDecorator(
      (story) => `<div>${story}</div>`
    ),
  ],
  render: (args: ToDoCreateFormComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<ToDoCreateFormComponent>;

export const Primary: Story = {
  args: {

  },
};
