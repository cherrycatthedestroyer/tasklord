import Input from "./Input";
import { useRef } from "react";

import { useAppDispatch } from "../store/hooks";
import { SET_SCREEN } from "@/store/screens";
import { ADD_TASK } from "@/store/tasks";

const INVALID_STYLE = "bg-stone-300 border border-red-600 w-full p-2 rounded";

const CreateForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const titleInput = useRef<HTMLInputElement>(null);
  const descInput = useRef<HTMLTextAreaElement>(null);
  const dateInput = useRef<HTMLInputElement>(null);

  function changeTab(name: string) {
    dispatch(SET_SCREEN({ name: name, id: 0 }));
  }

  function handleClick(event: React.MouseEvent) {
    let enteredTitle = titleInput.current!.value;
    let enteredDesc = descInput.current!.value;
    let enteredDate = dateInput.current!.value;
    if (
      enteredTitle.trim().length === 0 ||
      enteredDesc.trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      if (enteredTitle.trim().length === 0) {
        titleInput.current!.className = INVALID_STYLE;
      }
      if (enteredDesc.trim().length === 0) {
        descInput.current!.className = INVALID_STYLE;
      }
      if (enteredDate.trim().length === 0) {
        dateInput.current!.className = INVALID_STYLE;
      }
      return;
    }
    dispatch(
      ADD_TASK({
        title: enteredTitle,
        description: enteredDesc,
        due_date: enteredDate,
      })
    );
    changeTab("home");
  }

  return (
    <div className="flex flex-col gap-2 justify-center mx-8 w-full">
      <div className="self-end">
        <button
          onClick={() => changeTab("home")}
          className="hover:text-red-600 py-2 px-4 rounded"
        >
          Cancel
        </button>
        <button
          className="ml-2 bg-stone-700 hover:bg-stone-600 text-white py-2 px-4 rounded"
          onClick={(e) => handleClick(e)}
        >
          Save
        </button>
      </div>
      <Input label="TITLE" ref={titleInput} type="input" />
      <Input label="DESCRIPTION" type="area" ref={descInput} />
      <Input label="DUE DATE" type="date" ref={dateInput} />
    </div>
  );
};

CreateForm.displayName = "CreateForm";
export default CreateForm;
