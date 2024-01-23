import { useAppDispatch } from "../store/hooks";
import { SET_SCREEN } from "@/store/screens";
import Image from "next/image";

const Empty: React.FC = () => {
  const dispatch = useAppDispatch();

  function changeTab(name: string) {
    dispatch(SET_SCREEN({ name: name, id: 0 }));
  }
  return (
    <div className="m-auto text-center flex flex-col justify-center">
      <Image
        src="/no-projects.png"
        alt="paper and pen"
        className="h-24 w-24 self-center mr-7"
      />
      <h1 className="my-4 text-stone-600 text-2xl font-bold">
        No Task Selected
      </h1>
      <p className="text-stone-500 font-medium mb-8">
        Select a task or get started with a new one
      </p>
      <button
        onClick={() => changeTab("create")}
        className="bg-stone-700 hover:bg-stone-600 hover:text-white text-stone-400 py-2 px-4 rounded w-48 self-center"
      >
        Create new task
      </button>
    </div>
  );
};

Empty.displayName = "Empty";
export default Empty;
