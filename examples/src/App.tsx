import { BasicTable } from "./components/BasicTable";
import { EditableTable } from "./components/EditableTable";
import { ExpandableTable } from "./components/ExpandableTable";
import { OptionsTable } from "./components/OptionsTable";
import { SortableTable } from "./components/SortableTable";
import { TemplateTable } from "./components/TemplateTable";
import "./index.css";

const Tables = [
  {
    name: "Basic Table",
    component: <BasicTable />,
  },
  {
    name: "Editable Table",
    component: <EditableTable />,
  },
  {
    name: "Sortable Table",
    component: <SortableTable />,
  },
  {
    name: "Options Table",
    component: <OptionsTable />,
  },
  {
    name: "Expandable Table",
    component: <ExpandableTable />,
  },
  {
    name: "Template Table",
    component: <TemplateTable />,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {Tables.map((t) => (
        <div className="mb-4" key={t.name}>
          <h2 className="pb-2 text-2xl">{t.name}</h2>
          {t.component}
        </div>
      ))}
    </div>
  );
}

export default App;
