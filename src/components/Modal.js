import React from "react";

const modal = (props) => {
  const { cancelButton, handleOnChange, todo, createTodo, newTask } = props;

  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col gap-1">
                <span className="text-md font-medium ml-1">
                  {newTask ? "Add Task:" : "Edit Task:"}
                </span>{" "}
                <div className="sm:flex sm:items-start">
                  <input
                    onChange={handleOnChange}
                    type="text"
                    value={todo}
                    name="todo"
                    required
                    className="w-full border-[2px] border-violet-500 rounded-md focus:border-violet-500 focus:ring-0"
                  ></input>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  onClick={createTodo}
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-violet-500 px-4 py-2 text-base font-medium text-white shadow-sm  sm:ml-3 sm:w-auto sm:text-sm"
                >
                  {newTask ? "Add" : "Save"}
                </button>
                <button
                  onClick={() => cancelButton()}
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default modal;
