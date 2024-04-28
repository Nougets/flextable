import { FlexTableItemColumn } from ".";

type data = {
  columns: FlexTableItemColumn[];
  columnsEditable: FlexTableItemColumn[];
  columnsSortable: FlexTableItemColumn[];
  columnsHorizontalScroll: FlexTableItemColumn[];
  data: any[];
};

export const data: data = {
  columns: [
    {
      header: "Id",
      key: "id",
      isEditable: false,
      type: "number",
    },
    {
      header: "Name",
      key: "name",
      isEditable: false,
    },
    {
      header: "Email",
      key: "email",
      isEditable: false,
    },
  ],
  columnsSortable: [
    {
      header: "Id",
      key: "id",
      isEditable: false,
      type: "number",
      isSortable: true,
    },
    {
      header: "Name",
      key: "name",
      isEditable: false,
      type: "text",
      isSortable: true,
    },
    {
      header: "Email",
      key: "email",
      isEditable: false,
      type: "text",
      isSortable: true,
    },
  ],
  columnsEditable: [
    {
      header: "Id",
      key: "id",
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
      key: "name",
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
      key: "email",
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
  columnsHorizontalScroll: [
    {
      header: "Id",
      key: "id",
      isEditable: false,
      type: "number",
      style: {
        minWidth: "500px",
      },
    },
    {
      header: "Name",
      key: "name",
      isEditable: false,
      style: {
        minWidth: "500px",
      },
    },
    {
      header: "Email",
      key: "email",
      isEditable: false,
      style: {
        minWidth: "500px",
      },
    },
    {
      header: "Company",
      key: "company",
      style: {
        minWidth: "500px",
      },
    },
    {
      header: "Address",
      key: "address",
      style: {
        minWidth: "500px",
      },
    },
  ],
  data: [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      company: "Example Company Ltd.",
      address: "Example Street 123, 12345 Example City",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@example.com",
      company: "Example Company Ltd.",
      address: "Example Street 123, 12345 Example City",
    },
    {
      id: 3,
      name: "John Doe",
      email: "john.doe@example.com",
      company: "Example Company Ltd.",
      address: "Example Street 123, 12345 Example City",
    },
    {
      id: 4,
      name: "John Doe",
      email: "john.doe@example.com",
      company: "Example Company Ltd.",
      address: "Example Street 123, 12345 Example City",
    },
    {
      id: 5,
      name: "John Doe",
      email: "john.doe@example.com",
      company: "Example Company Ltd.",
      address: "Example Street 123, 12345 Example City",
    },
    {
      id: 6,
      name: "John Doe",
      email: "john.doe@example.com",
      company: "Example Company Ltd.",
      address: "Example Street 123, 12345 Example City",
    },
    {
      id: 7,
      name: "John Doe",
      email: "john.doe@example.com",
      company: "Example Company Ltd.",
      address: "Example Street 123, 12345 Example City",
    },
    {
      id: 8,
      name: "John Doe",
      email: "john.doe@example.com",
      company: "Example Company Ltd.",
      address: "Example Street 123, 12345 Example City",
    },
    {
      id: 9,
      name: "John Doe",
      email: "john.doe@example.com",
      company: "Example Company Ltd.",
      address: "Example Street 123, 12345 Example City",
    },
    {
      id: 10,
      name: "John Doe",
      email: "john.doe@example.com",
      company: "Example Company Ltd.",
      address: "Example Street 123, 12345 Example City",
    },
    {
      id: 11,
      name: "John Doe",
      email: "john.doe@example.com",
      company: "Example Company Ltd.",
      address: "Example Street 123, 12345 Example City",
    },
  ],
};
