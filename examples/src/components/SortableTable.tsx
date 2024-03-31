import { FlexTable, FlexTableItemColumn } from "@nouget/flextable";

const columns: FlexTableItemColumn[] = [
  { header: "Name", key: "name", isSortable: true },
  { header: "Age", key: "age", isSortable: true },
  // Add more columns as needed
];

const data = [
  { name: "John Doe", age: 30 },
  { name: "Jane Doe", age: 25 },
  // Add more data as needed
];

export const SortableTable = () => {
  return <FlexTable columns={columns} data={data} />;
};
