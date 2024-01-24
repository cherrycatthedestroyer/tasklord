import SideBar from "../components/SideBar";
import Empty from "../components/Empty";
import CreateForm from "@/components/CreateForm";
import Task from "@/components/Task";

import React from "react";
import { useAppSelector } from "../store/hooks";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";

export default function TaskPage() {
  const router = useRouter();
  const taskList = useAppSelector((state) => state.tasks.task_list);
  const selected = useAppSelector((state) => state.screens);
  const [name, setName] = useState<string>("someone");

  useEffect(() => {
    setName(router.query.TaskPage!.toString());
  }, [router.query.TaskPage]);

  return (
    <div className="flex h-screen w-screen">
      <SideBar user={name} className="bg-stone-900 w-1/5 pr-5 min-w-48" />
      <div className="w-4/5 flex justify-stretch m-16">
        {selected.name === "home" && <Empty />}
        {selected.name === "create" && <CreateForm />}
        {taskList.map((task, taskIndex) =>
          task.title === selected.name ? (
            <Task key={taskIndex} taskId={taskIndex} />
          ) : undefined
        )}
      </div>
    </div>
  );
}
