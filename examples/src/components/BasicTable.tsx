import "@nouget/flextable/dist/assets/style.css";
import { FlexTable, FlexTableItemColumn } from "@nouget/flextable";

const columns: FlexTableItemColumn[] = [
  { header: "Name", key: "name" },
  { header: "Age", key: "age" },
  // Add more columns as needed
];

const data = [
  { name: "John Doe", age: 30 },
  { name: "Jane Doe", age: 25 },
  // Add more data as needed
];

export const BasicTable = () => {
  return <FlexTable columns={columns} data={data} />;
};
