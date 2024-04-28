import { ComponentProps, useMemo, useState } from "react";
import FlexTableHeader from "./FlexTableHeader";
import FlexTableRow from "./FlexTableRow";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";

type RowColumnData = ComponentProps<typeof FlexTableRow>["columnsData"][string];

export type FlexTableItemColumn = {
  key: string;
  header: string;
  isSortable?: boolean;
} & Partial<RowColumnData>;

type OptionsCallback = (data: object) => void;

export type FlexTableProps = {
  columns: FlexTableItemColumn[];
  expandedTemplate?: (data: object) => JSX.Element;
  expandable?: boolean;
  options?: {
    name: string;
    callback: OptionsCallback;
  }[];
  data: any[];
  bodyStyle?: React.CSSProperties;
  enablePagination?: boolean;
  paginationSize?: number;
};

type SortType = "asc" | "desc";

export function FlexTable(props: FlexTableProps) {
  const [page, setPage] = useState<number>(0);
  const [currentSort, setCurrentSort] = useState<[string, SortType]>([
    "",
    "asc",
  ]);
  const pages = Math.ceil(props.data.length / (props.paginationSize || 1));
  const columnsData = useMemo(() => {
    const data: ComponentProps<typeof FlexTableRow>["columnsData"] = {};

    props.columns.forEach((column) => {
      data[column.key] = {
        template: column.template || null,
        style: column.style || {},
        isEditable: column.isEditable || false,
        onChange: column.onChange || null,
        onSubmit: column.onSubmit || null,
        type: column.type || "text",
      };
    });
    return data;
  }, [props.columns]);

  const columnsOrder = useMemo(
    () => props.columns.map((column) => column.key),
    [props.columns],
  );

  const orderedData = useMemo(() => {
    if (currentSort[0] === "") return props.data;

    const direction = currentSort[1] === "asc" ? 1 : -1;
    const column = currentSort[0];
    const columnType =
      props.columns.find((c) => c.key === column)?.type || "string";

    return [...props.data].sort((a: any, b: any) => {
      if (columnType === "string") {
        const columnA = a[column].toString().toUpperCase();
        const columnB = b[column].toString().toUpperCase();

        if (columnA < columnB) return -1 * direction;
        if (columnA > columnB) return 1 * direction;

        return 0;
      }

      return (parseFloat(a[column]) - parseFloat(b[column])) * direction;
    });
  }, [currentSort, props.data]);

  const fromItem = page * (props.paginationSize || 1);
  const toItem = props.enablePagination
    ? fromItem + (props.paginationSize || 1)
    : props.data.length;

  return (
    <div className="relative w-full rounded-lg bg-white p-6 shadow-md">
      <div className="relative w-full overflow-x-auto overflow-y-visible">
        <FlexTableHeader
          columns={props.columns}
          expandable={props.expandable || false}
          hasOptions={(props.options || []).length > 0}
          currentSort={currentSort[0]}
          direction={currentSort[1]}
          onSort={(column: string) => {
            if (column !== currentSort[0]) {
              setCurrentSort([column, "asc"]);
              return;
            }

            if (currentSort[1] === "desc") {
              setCurrentSort(["", "asc"]);
            } else {
              const sortDirection = currentSort[1] === "asc" ? "desc" : "asc";
              setCurrentSort([column, sortDirection]);
            }
          }}
        />
        <div
          className="flex w-fit min-w-full flex-col gap-4 overflow-y-auto py-4"
          style={props.bodyStyle}
        >
          {orderedData.slice(fromItem, toItem).map((row, idx) => (
            <FlexTableRow
              data={row}
              columnsData={columnsData}
              columnsInOrder={columnsOrder}
              expandedTemplate={props.expandedTemplate}
              key={idx}
              expandable={props.expandable || false}
              options={props.options || []}
            />
          ))}
        </div>
      </div>
      <div className="w-full">
        {props.enablePagination && (
          <div className="flex w-full select-none flex-col items-center">
            <div className="h-px w-full bg-gray-300"></div>
            <div className="mt-6 flex w-full flex-row  justify-end">
              {page > 0 && (
                <ChevronLeftIcon
                  width="25"
                  className="cursor-pointer"
                  onClick={() => {
                    setPage(page - 1);
                  }}
                />
              )}
              <div className="mx-4">
                {page + 1} / {pages}
              </div>
              {page < pages - 1 && (
                <ChevronRightIcon
                  width="25"
                  className="cursor-pointer"
                  onClick={() => {
                    setPage(page + 1);
                  }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
