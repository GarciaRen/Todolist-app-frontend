import { React, useState } from "react";
import { SuccessToast, ErrorToast } from "./Toast";
import { useTodoStore } from "../store/todoStore";
import { postRouteApi, putRouteApi } from "../API/services";

const Modal = ({ type, _id }) => {
  const { addModal, handleAddModal, getTodoData, handleEditModal, editModal } =
    useTodoStore((state) => state);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const params = {
    todoName: value,
  };

  // Create todo task
  const createTodo = async (e) => {
    e.preventDefault();
    const isValid = formValidation();

    if (isValid && addModal) {
      await postRouteApi("/todos", params)
        .then((res) => {
          if (res.status === 201) {
            const {
              data: { message },
            } = res;
            getTodoData();
            handleAddModal();
            return SuccessToast(message);
          }
        })
        .catch((error) => {
          return ErrorToast(error.message);
        });
    }
    if (isValid && editModal) {
      await putRouteApi(`/todos/${_id}`, params)
        .then((res) => {
          if (res.status === 201) {
            const {
              data: { message },
            } = res;
            getTodoData();
            handleEditModal(false);
            return SuccessToast(message);
          }
        })
        .catch((error) => {
          return ErrorToast(error.message);
        });
    }
  };

  // Cancel button
  const cancelButton = () => {
    handleAddModal(false);
    handleEditModal(false);
  };

  // Form validation
  const formValidation = () => {
    let err = "";
    let isValid = true;

    if (!value.length) {
      err = "*Required Field";
      isValid = false;
    }

    setError(err);
    return isValid;
  };

  return (
    <>
      <form
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        onSubmit={createTodo}
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all md:w-[600px]">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col gap-1">
                <span className="text-md font-medium ml-1">
                  {type}
                  {error && (
                    <span className="text-red-600 text-xs ml-1">{error}</span>
                  )}
                </span>{" "}
                <div className="sm:flex sm:items-start">
                  <input
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    value={value}
                    name="todo"
                    className="w-full border-[2px] border-violet-500 rounded-md focus:border-violet-500 focus:ring-0"
                  ></input>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex gap-3 justify-center md:justify-end">
                <button
                  onSubmit={createTodo}
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-violet-500 px-4 py-2 text-base font-medium text-white shadow-sm  "
                >
                  {addModal ? "Add" : "Save"}
                </button>
                <button
                  onClick={cancelButton}
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-0"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Modal;
