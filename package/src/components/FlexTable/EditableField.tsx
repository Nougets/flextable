import { useRef, useState } from "react";

type EditableFieldProps = {
  inputValue?: string;
  onChange: ((row: object, value: string) => void) | null;
  onSubmit: ((row: object, value: string) => void) | null;
  type: "text" | "number" | "date";
  row: object;
};

const EditableField = ({
  inputValue,
  type,
  row,
  onChange,
  onSubmit,
}: EditableFieldProps) => {
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  if (inputValue && inputRef.current && inputRef.current.value === "") {
    inputRef.current.value = inputValue;
  }

  if (editMode && inputRef.current) {
    setTimeout(() => {
      inputRef.current!.focus();
    }, 0);
  }

  return (
    <>
      <span
        className={`${editMode ? "hidden" : "block"}`}
        onClick={() => {
          setEditMode(!editMode);
        }}
      >
        {inputValue}
      </span>
      <input
        className={`
          border border-black px-1
          ${editMode ? "block" : "hidden"}`}
        type={type}
        ref={inputRef}
        onFocus={(e) => e.persist()}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            if (onSubmit) onSubmit(row, e.currentTarget.value);
            setEditMode(false);
          }
        }}
        onChange={(e) => {
          if (onChange) onChange(row, e.target.value);
        }}
      />
    </>
  );
};

export default EditableField;
