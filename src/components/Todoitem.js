import React from "react";
import { FiEdit } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";

const Todoitem = (props) => {
  const { index, val, status, deleteTodo, checkButton, handleUpdate } = props;

  return (
    <div className="mx-10 flex flex-col  items-center">
      <div className="p-2 flex w-full items-center justify-between gap-3 border-b border-violet-400 shadow-2xl shadow-black/35 rounded-md">
        <div className="flex items-center gap-5">
          <input
            type="checkbox"
            className="h-5 w-5 focus:ring-transparent rounded-full border-[3px] border-violet-500 checked: text-violet-500 cursor-pointer"
            onClick={() => checkButton(index)}
          />
          <h3
            key={index}
            className={`text-2xl font-medium text-gray-500 tracking-wide ${
              status ? "line-through" : ""
            }`}
          >
            {val}
          </h3>
        </div>
        <div className="flex gap-5 items-center">
          <button onClick={() => handleUpdate()}>
            <FiEdit className="text-lg text-violet-500 cursor-pointer" />
          </button>
          <button onClick={() => deleteTodo(index)}>
            <TiDelete className="text-2xl text-violet-500 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todoitem;
