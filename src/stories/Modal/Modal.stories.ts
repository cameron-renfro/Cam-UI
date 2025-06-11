import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Example/Modal",
  component: Modal,
};

export default meta;

export const Default: StoryObj<typeof Modal> = {
  args: {},
};
