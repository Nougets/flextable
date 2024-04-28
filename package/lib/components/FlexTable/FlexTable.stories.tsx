import type { Meta, StoryObj } from "@storybook/react";
import { data } from "./data";

import { FlexTable } from "./index";

const meta = {
  title: "Components/FlexTable",
  component: FlexTable,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof FlexTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: data.columns,
    data: data.data,
    expandable: true,
    paginationSize: 5,
    enablePagination: true,
    bodyStyle: {},
    expandedTemplate(data) {
      return (
        <div className="m-6 w-full text-left">
          <h1 className="mb-4">This is an expanded row with the data</h1>
          <table className="w-full border-collapse border border-slate-400 bg-white text-sm shadow-sm dark:border-slate-500 dark:bg-slate-800">
            <thead className="bg-slate-50 dark:bg-slate-700">
              <tr>
                {Object.entries(data).map(([key, _]) => (
                  <th className="border border-slate-300 p-4 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.entries(data).map(([_, value]) => (
                  <td className="border border-slate-300 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    {value}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      );
    },
    options: [
      {
        name: "Edit",
        callback: (row: any) => {
          alert("Clicked on: " + JSON.stringify(row));
        },
      },
    ],
  },
};

export const Basic: Story = {
  args: {
    columns: data.columns,
    data: data.data,
  },
  parameters: {
    controls: {
      exclude: [
        "expandable",
        "expandedTemplate",
        "options",
        "paginationSize",
        "enablePagination",
        "bodyStyle",
      ],
    },
  },
};

export const Pagination: Story = {
  args: {
    columns: data.columns,
    data: data.data,
    paginationSize: 5,
    enablePagination: true,
  },
  parameters: {
    controls: {
      exclude: ["expandable", "expandedTemplate", "options", "bodyStyle"],
    },
  },
};

export const Options: Story = {
  args: {
    columns: data.columns,
    data: data.data,
    options: [
      {
        name: "Edit",
        callback: (row: any) => {
          alert("Clicked on: " + JSON.stringify(row));
        },
      },
      {
        name: "Delete",
        callback: (row: any) => {
          alert("Clicked on: " + JSON.stringify(row));
        },
      },
    ],
  },
  parameters: {
    controls: {
      exclude: [
        "expandable",
        "expandedTemplate",
        "paginationSize",
        "enablePagination",
        "bodyStyle",
      ],
    },
  },
};

export const Editable: Story = {
  args: {
    columns: data.columnsEditable,
    data: data.data,
  },
  parameters: {
    controls: {
      exclude: [
        "expandable",
        "expandedTemplate",
        "paginationSize",
        "enablePagination",
        "bodyStyle",
        "options",
      ],
    },
  },
};

export const Sortable: Story = {
  args: {
    columns: data.columnsSortable,
    data: data.data,
  },
  parameters: {
    controls: {
      exclude: [
        "expandable",
        "expandedTemplate",
        "paginationSize",
        "enablePagination",
        "bodyStyle",
        "options",
      ],
    },
  },
};

export const HorizonalScroll: Story = {
  args: {
    columns: data.columnsHorizontalScroll,
    data: data.data,
    enablePagination: true,
    paginationSize: 5,
  },
  parameters: {
    controls: {
      exclude: [
        "expandable",
        "expandedTemplate",
        "paginationSize",
        "enablePagination",
        "bodyStyle",
        "options",
      ],
    },
  },
};
