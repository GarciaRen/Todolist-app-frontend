import { React, useEffect } from "react";
import { FaListAlt } from "react-icons/fa";
import Modal from "./components/Modal";
import Todoitem from "./components/Todoitem";
import { ToastContainer } from "react-toastify";
import { useTodoStore } from "./store/todoStore";

const App = () => {
  // * zustand store
  const { todoList, getTodoData, addModal, handleAddModal } = useTodoStore(
    (state) => state
  );

  const addModalFunc = () => {
    return handleAddModal(true);
  };

  useEffect(() => {
    getTodoData();
  }, [getTodoData]);

  return (
    <div>
      <div className="min-h-screen flex justify-center bg-slate-200">
        <div className="flex flex-col py-4 h-screen md:w-[650px] w-[300px]">
          <div className="p-4 bg-violet-500/90 flex justify-center items-center gap-5 text-white shadow-2xl rounded-md">
            <FaListAlt className="md:text-2xl text-lg" />
            <h1 className="md:text-2xl text-md tracking-wide font-bold ">
              Todo list App
            </h1>
          </div>
          <div className="bg-white h-full shadow-2xl rounded-lg py-10 mt-5 flex flex-col gap-3 overflow-auto ">
            {todoList.length ? (
              todoList.map((val, index) => {
                return <Todoitem val={val} key={index} />;
              })
            ) : (
              <h1 className="text-center md:text-2xl text-md text-gray-500">
                No Task(s) Found
              </h1>
            )}
          </div>
          <button
            onClick={addModalFunc}
            className="flex md:p-3 p-1 justify-center md:-mt-8 -mt-6 z-10 mx-auto bg-violet-500 rounded-full w-[200px] gap-2 md:text-2xl text-md font-medium items-center text-white border-2 border-violet-500 shadow-xl hover:bg-violet-400 hover:border-violet-400 "
          >
            <span className="text-3xl font-bold">+</span> New Task
          </button>
          {addModal && <Modal type={"Add Todo"} />}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
