import { useRef } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { REMOVE_TASK, REMOVE_SUBTASK, ADD_SUBTASK } from "@/store/tasks";

const Task: React.FC<{ taskId: number }> = ({ taskId }) => {
  const taskList = useAppSelector((state) => state.tasks.task_list);
  const subTaskInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const inputStyle =
    "bg-stone-300 border-b border-stone-300 mr-2 py-2 px-2 rounded";
  const invalidInputStyle =
    "bg-stone-300 border border-red-600 mr-2 py-2 px-2 rounded";

  function removeTask() {
    dispatch(REMOVE_TASK(taskId));
  }

  function addSubTask() {
    let enteredSubTask = subTaskInput.current!.value;
    if (enteredSubTask.trim().length === 0) {
      subTaskInput.current!.className = invalidInputStyle;
      return;
    }
    dispatch(ADD_SUBTASK({ task_id: taskId, sub_task: enteredSubTask }));
    subTaskInput.current!.value = "";
    subTaskInput.current!.className = inputStyle;
  }

  function removeSubTask(subTaskId: number) {
    dispatch(REMOVE_SUBTASK({ task_id: taskId, sub_task_id: subTaskId }));
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between shrink">
        <h2 className="mb-4 text-5xl font-bold mr-16">
          {taskList[taskId].title}
        </h2>
        <button
          onClick={removeTask}
          className="hover:text-red-600 py-2 px-2 rounded"
        >
          Delete
        </button>
      </div>
      <p className="text-stone-400">{taskList[taskId].due_date}</p>
      <p className="my-6">{taskList[taskId].description}</p>
      <hr />
      <h2 className="mt-6 mb-4 text-3xl font-bold">Tasks</h2>
      <div>
        <input ref={subTaskInput} type="text" className={inputStyle} />
        <button
          onClick={addSubTask}
          className="border-2 border-white hover:border-stone-600 py-2 px-4 mb-5 rounded"
        >
          Add Task
        </button>
      </div>
      <ul>
        {taskList[taskId].sub_tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center my-5 px-4 py-6 min-w-5 bg-zinc-300 rounded"
          >
            <p className="font-medium">{task}</p>
            <button
              onClick={() => removeSubTask(index)}
              className="hover:text-red-600 py-2 px-2 rounded"
            >
              Clear
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Task.displayName = "Task";
export default Task;
