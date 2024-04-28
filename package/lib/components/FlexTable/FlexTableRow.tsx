import { ComponentProps, useEffect, useRef, useState } from "react";
import { getPropIfExists } from "./utils";
import { EllipsisVerticalIcon, MinusIcon, PlusIcon } from "./Icons";
import EditableField from "./EditableField";

type ColumnData = {
  template: ((row: object, value: string) => JSX.Element) | null;
  style: React.CSSProperties;
  isEditable: boolean;
} & Omit<ComponentProps<typeof EditableField>, "row">;

type FlexTableRowProps = {
  data: object;
  columnsInOrder: string[];
  columnsData: {
    [name: string]: ColumnData;
  };
  expandedTemplate?: (data: object) => JSX.Element;
  expandable: boolean;
  options: { name: string; callback: (data: object) => void }[];
};

function FlexTableRow({
  data,
  columnsInOrder,
  columnsData,
  expandedTemplate,
  expandable,
  options,
}: FlexTableRowProps) {
  const [expanded, setExpanded] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const ExpandedTemplate = ({ data }: { data: object }) => {
    if (expandedTemplate) {
      return expandedTemplate(data);
    }

    return null;
  };

  useEffect(() => {
    // Disable show options if clicked outside of container
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`justify-middle flex w-full flex-col items-center justify-evenly rounded-lg border border-gray-300 px-4 py-4 hover:bg-blue-50
    ${expanded ? "border-transparent bg-blue-50" : ""}
    `}
    >
      <div className="flex w-full flex-row items-center justify-evenly">
        {expandable && (
          <div
            className="mr-4 flex-1 text-left"
            style={{ maxWidth: "25px", minWidth: "25px" }}
          >
            {!expanded && (
              <PlusIcon
                width="25"
                color="#32C622"
                className="cursor-pointer rounded-full hover:bg-gray-200"
                onClick={() => setExpanded(true)}
              />
            )}
            {expanded && (
              <MinusIcon
                width="25"
                color="#32C622"
                className="cursor-pointer rounded-full hover:bg-gray-200"
                onClick={() => setExpanded(false)}
              />
            )}
          </div>
        )}
        {columnsInOrder.map((column) => {
          const Template = ({ value }: { value: string }) => {
            if (
              columnsData[column].template &&
              columnsData[column].template !== null
            ) {
              return columnsData[column].template!(data, value);
            }

            return null;
          };
          return (
            <div
              className="flex-1 text-left"
              style={columnsData[column].style || {}}
              key={column}
            >
              {columnsData[column].template ? (
                <Template value={getPropIfExists(data, column)} />
              ) : (
                <span
                  className="block overflow-hidden text-ellipsis whitespace-nowrap text-sm"
                  style={{
                    width: "calc(100% - 20px)",
                  }}
                >
                  {columnsData[column].isEditable ? (
                    <EditableField
                      inputValue={getPropIfExists(data, column)}
                      onChange={columnsData[column].onChange}
                      onSubmit={columnsData[column].onSubmit}
                      type={columnsData[column].type}
                      row={data}
                    />
                  ) : (
                    getPropIfExists(data, column)
                  )}
                </span>
              )}
            </div>
          );
        })}
        {options.length > 0 && (
          <div
            className="relative flex-1 text-left"
            style={{ maxWidth: "25px", minWidth: "25px" }}
          >
            <EllipsisVerticalIcon
              width="25"
              className="cursor-pointer rounded-full hover:bg-gray-200"
              onClick={() => setShowOptions((state) => !state)}
            />
            {showOptions && (
              <div
                className="absolute right-6 z-10 rounded-lg bg-gray-200"
                ref={optionsRef}
              >
                <div className="my-2 flex flex-col w-full">
                  {options.map((option) => (
                    <div
                      className="w-full cursor-pointer px-4 py-1 font-bold hover:bg-gray-300"
                      onClick={() => {
                        option.callback(data);
                        setShowOptions(false);
                      }}
                      key={option.name}
                    >
                      {option.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {expanded && <ExpandedTemplate data={data} />}
    </div>
  );
}

export default FlexTableRow;
