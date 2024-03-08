import { FlexTableItemColumn } from ".";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";

type FlexTableHeaderProps = {
  columns: FlexTableItemColumn[];
  expandable: boolean;
  hasOptions: boolean;
  currentSort: string;
  direction: "asc" | "desc";
  onSort: (column: string) => void;
};

function FlexTableHeader(props: FlexTableHeaderProps) {
  return (
    <div className="w-fit min-w-full">
      <div className="flex flex-row justify-evenly px-4 py-4">
        {props.expandable && (
          <div
            className={`mr-4 flex-1 text-left font-bold`}
            style={{ maxWidth: "25px", minWidth: "25px" }}
          ></div>
        )}
        {props.columns.map((column) => (
          <div
            className={`flex-1 text-left font-bold`}
            style={column.style || {}}
            key={column.name}
          >
            <span
              className={`relative select-none ${column.sortable ? "cursor-pointer" : ""}`}
              onClick={() => {
                if (column.sortable) {
                  props.onSort(column.name);
                }
              }}
            >
              {column.header}
              {column.sortable && props.currentSort === column.name && (
                <>
                  {props.direction === "asc" ? (
                    <ChevronLeftIcon
                      width="20"
                      color="black"
                      className="absolute -right-6 top-0 rotate-90"
                    />
                  ) : (
                    <ChevronRightIcon
                      width="20"
                      color="black"
                      className="absolute -right-6 top-0 rotate-90"
                    />
                  )}
                </>
              )}
            </span>
          </div>
        ))}
        {props.hasOptions && (
          <div
            className={`text-matec-blue-400 flex-1 text-left font-bold`}
            style={{ width: "25px", maxWidth: "25px" }}
          ></div>
        )}
      </div>

      <div className="h-px w-full bg-gray-300"></div>
    </div>
  );
}

export default FlexTableHeader;
