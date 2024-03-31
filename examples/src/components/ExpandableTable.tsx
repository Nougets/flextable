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

const expandableTemplate = (data: object) => {
  data = data as { name: string; age: number };
  return (
    <div className="mt-4 w-full">
      <table className="w-full border-collapse border border-slate-400 bg-white text-sm shadow-sm dark:border-slate-500 dark:bg-slate-800">
        <thead className="bg-slate-50 dark:bg-slate-700">
          <tr>
            {Object.entries(data).map(([key]) => (
              <th className="border border-slate-300 p-4 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.entries(data).map(([, value]) => (
              <td className="border border-slate-300 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                {value}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const ExpandableTable = () => {
  return (
    <FlexTable
      expandable
      expandedTemplate={expandableTemplate}
      columns={columns}
      data={data}
    />
  );
};
