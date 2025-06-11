import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Example/TextInput",
  component: TextInput,
};

export default meta;

export const Default: StoryObj<typeof TextInput> = {
  args: {},
};
