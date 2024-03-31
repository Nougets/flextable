import { FlexTable, FlexTableItemColumn } from "@nouget/flextable";

const columns: FlexTableItemColumn[] = [
  { header: "Name", key: "name", isEditable: true },
  { header: "Age", key: "age", isEditable: true },
  // Add more columns as needed
];

const data = [
  { name: "John Doe", age: 30 },
  { name: "Jane Doe", age: 25 },
  // Add more data as needed
];

export const OptionsTable = () => {
  return (
    <FlexTable
      columns={columns}
      data={data}
      options={[
        {
          name: "Edit",
          callback: (row: object) => {
            alert("You clicked on row: " + JSON.stringify(row));
          },
        },
      ]}
    />
  );
};
