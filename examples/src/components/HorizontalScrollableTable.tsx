import "@nouget/flextable/dist/assets/style.css";
import { FlexTable, FlexTableItemColumn } from "@nouget/flextable";

const columns: FlexTableItemColumn[] = [
  { header: "Name", key: "name" },
  { header: "Age", key: "age" },
  { header: "Email", key: "email" },
  { header: "Company", key: "company" },
  { header: "Address", key: "address" },
  // Add more columns as needed
];

const data = [
  {
    name: "John Doe",
    age: 30,
    email: "john.doe@email.com",
    company: "John Doe Inc.",
    address: "123 Main St.",
  },
  {
    name: "Jane Doe",
    age: 25,
    email: "jane.doe@email.com",
    company: "Jane Doe Inc.",
    address: "123 Main St.",
  },
  // Add more data as needed
];

export const HorizontalScrollTable = () => {
  return <FlexTable columns={columns} data={data} />;
};
