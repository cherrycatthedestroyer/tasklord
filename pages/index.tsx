import React from "react";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Home() {
  const enteredInput = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function routeToTaskPage() {
    let enteredName = enteredInput.current!.value;
    if (enteredName.trim().length === 0) {
      enteredName = "someone";
    }
    router.push("/" + enteredName);
  }

  return (
    <div className="items-center h-screen flex flex-col justify-center">
      <h1 className="my-4 text-stone-600 text-8xl font-bold">Tasklord</h1>
      <p className="text-stone-500 font-medium mb-8">
        Enter your name to make a Taskboard
      </p>
      <input
        ref={enteredInput}
        type="text"
        placeholder="enter name"
        className={"bg-stone-300 border-b border-stone-300 p-2 mb-5"}
      />
      <button
        onClick={routeToTaskPage}
        className="bg-stone-700 hover:bg-stone-600 hover:text-white text-stone-400 py-2 px-4 rounded w-48"
      >
        Create a Taskboard
      </button>
    </div>
  );
}
