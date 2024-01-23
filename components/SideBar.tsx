import React from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { SET_SCREEN } from "@/store/screens";

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  user: string;
}

const SideBar: React.FC<DivProps> = ({ user, ...props }) => {
  const taskList = useAppSelector((state) => state.tasks.task_list);
  const selected = useAppSelector((state) => state.screens);
  const dispatch = useAppDispatch();

  const style =
    "ml-8 my-1 hover:bg-stone-800 text-white py-2 px-4 text-left w-4/5 rounded";
  const activeStyle =
    "ml-8 my-1 hover:bg-stone-800 bg-stone-800 text-white py-2 px-4 text-left w-4/5 rounded";

  function changeTab(name: string) {
    dispatch(SET_SCREEN({ name: name, id: 0 }));
  }

  return (
    <div {...props}>
      <h2 className="tracking-wide ml-8 mb-8 mt-16 text-xl text-white font-semibold">
        {user.toUpperCase()}'S TASKS
      </h2>
      <button
        onClick={() => changeTab("create")}
        className="ml-8 mb-8 bg-stone-700 hover:bg-stone-600 text-white py-2 px-3 rounded"
      >
        + Add Project
      </button>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            <button
              onClick={() => changeTab(task.title)}
              className={task.title === selected.name ? activeStyle : style}
            >
              {task.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
