import "@nouget/flextable/dist/assets/style.css";
import { FlexTable, FlexTableItemColumn } from "@nouget/flextable";

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const ageColumnTemplate = (_: object, value: string) => (
  <div
    style={{
      backgroundColor: `#${randomColor()}55`,
    }}
    className="rounded p-4"
  >
    {value}
  </div>
);

const columns: FlexTableItemColumn[] = [
  { header: "Name", key: "name" },
  { header: "Age", key: "age", template: ageColumnTemplate },
  // Add more columns as needed
];

const data = [
  { name: "John Doe", age: 30 },
  { name: "Jane Doe", age: 25 },
  // Add more data as needed
];

export const TemplateTable = () => {
  return <FlexTable columns={columns} data={data} />;
};
