import { forwardRef, useImperativeHandle, useRef } from "react";

interface Props {
  label: string;
  type: string;
}

export type Ref = HTMLInputElement | HTMLTextAreaElement;

const Input = forwardRef<Ref, Props>(({ label, type = "input" }, ref) => {
  const styling = "bg-stone-300 border-b border-stone-300 w-full p-2 rounded";

  let inputContent = (
    <input
      type="text"
      className={styling}
      name={label}
      ref={ref as React.RefObject<HTMLInputElement>}
    />
  );
  if (type === "area") {
    inputContent = (
      <textarea
        name={label}
        cols={30}
        rows={4}
        className={styling}
        ref={ref as React.RefObject<HTMLTextAreaElement>}
      />
    );
  } else if (type === "date") {
    inputContent = (
      <input
        type="date"
        className={styling}
        name={label}
        ref={ref as React.RefObject<HTMLInputElement>}
      />
    );
  }
  return (
    <div className="w-full mb-3">
      <p className="font-bold text-stone-900 mb-1">{label}</p>
      {inputContent}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
