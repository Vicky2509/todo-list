"use client";

import React, { useState } from "react";

const page = () => {
  const [taskName, settaskName] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { taskName, desc }]);
    settaskName("");
    setdesc("");
  };

  const deleteHandler = (index) => {
    let copyMaintask = [...mainTask];
    copyMaintask.splice(index, 1)
    setmainTask(copyMaintask);
  };

  let renderTask = (
    <h3 className="font-bold flex justify-center align-middle">
      No Task is Listed
    </h3>
  );
  
  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, index) => {
      return (
        <li key={index} className="flex justify-between ml-3 mb-2">
          <div className=" flex justify-between w-2/5 align-middle">
            <h5>{task.taskName}</h5>
            <h6>{task.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(index);
            }}
            className=" bg-red-500  p-3 rounded-xl"
          >
            Delete
          </button>
        </li>
      );
    });
  } else {
    {
      renderTask;
    }
  }

  return (
    <>
      <h1 className="bg-black text-white align-middle justify-center flex font-bold font-sans text-8xl pb-5 pt-0">
        My Todo List
      </h1>
      <form onSubmit={submitHandler} className="flex justify-center">
        <input
          type="text"
          className="text-black text-2xl border-solid border-zinc-800 border-4 widt m-10 py-2 px-6"
          placeholder="Enter Your Task Name/Tittle"
          value={taskName}
          onChange={(e) => {
            settaskName(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-black text-2xl border-solid border-zinc-800 border-4 widt m-10 ml-0 py-2 px-6"
          placeholder="Enter Task Description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button className="bg-black text-white mt-10 mb-10 ml-0 px-4 text-2xl py-3 rounded-xl font-bold">
          Add Task
        </button>
      </form>
      <hr />
      <div className=" p-8 font-semibold bg-slate-300">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
