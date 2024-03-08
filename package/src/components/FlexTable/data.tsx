import { FlexTableItemColumn } from ".";

type data = {
  columns: FlexTableItemColumn[];
  columnsEditable: FlexTableItemColumn[];
  columnsSortable: FlexTableItemColumn[];
  data: any[];
};

export const data: data = {
  columns: [
    {
      header: "Id",
      name: "id",
      isEditable: false,
      type: "number",
    },
    {
      header: "Name",
      name: "name",
      isEditable: false,
    },
    {
      header: "Email",
      name: "email",
      isEditable: false,
    },
  ],
  columnsSortable: [
    {
      header: "Id",
      name: "id",
      isEditable: false,
      type: "number",
      sortable: true,
    },
    {
      header: "Name",
      name: "name",
      isEditable: false,
      type: "string",
      sortable: true,
    },
    {
      header: "Email",
      name: "email",
      isEditable: false,
      type: "string",
      sortable: true,
    },
  ],
  columnsEditable: [
    {
      header: "Id",
      name: "id",
      isEditable: true,
      onChange(row: object, value: string) {
        console.log(
          "Value changed: " + JSON.stringify(row) + " with new value: " + value,
        );
      },
      onSubmit(row: object, value: string) {
        console.log(
          "Value submitted: " +
            JSON.stringify(row) +
            " with new value: " +
            value,
        );
      },
      type: "number",
    },
    {
      header: "Name",
      name: "name",
      isEditable: true,
      onChange(row: object, value: string) {
        console.log(
          "Value changed: " + JSON.stringify(row) + " with new value: " + value,
        );
      },
      onSubmit(row: object, value: string) {
        console.log(
          "Value submitted: " +
            JSON.stringify(row) +
            " with new value: " +
            value,
        );
      },
      type: "text",
    },
    {
      header: "Email",
      name: "email",
      isEditable: true,
      onChange(row: object, value: string) {
        console.log(
          "Value changed: " + JSON.stringify(row) + " with new value: " + value,
        );
      },
      onSubmit(row: object, value: string) {
        console.log(
          "Value submitted: " +
            JSON.stringify(row) +
            " with new value: " +
            value,
        );
      },
      type: "text",
    },
  ],
  data: [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: 3,
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: 4,
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: 5,
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: 6,
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: 7,
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: 8,
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: 9,
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: 10,
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: 11,
      name: "John Doe",
      email: "john.doe@example.com",
    },
  ],
};
