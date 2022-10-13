import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "./Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};

export const WithinText: StoryObj<CheckboxProps> = {
  decorators: [
    (Story) => (
      <div className="flex gap-2 items-center">
        {Story()}
        <Text size="sm">Lembre-me de min por 30 dias</Text>
      </div>
    ),
  ],
};
