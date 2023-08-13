import { DarkModeToggle } from '../components/darkModeToggle';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/app',
  component: DarkModeToggle,
  parameters: {
    layout: 'centered',
  },
  
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const darkModeToggle = {
  args: {
    primary: true,
    label: 'darkModeToggle',
  },
};

