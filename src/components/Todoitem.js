import { React, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";

// * components
import { deleteRouteApi, putRouteApi } from "../API/services";
import { useTodoStore } from "../store/todoStore";
import { SuccessToast, ErrorToast } from "../components/Toast";
import Modal from "./Modal";

const Todoitem = (props) => {
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCheckButton = () => {
    setCheck(!check);
  };

  const {
    val: { todoName, _id, isDone },
  } = props;

  // * zustand store
  const { getTodoData, editModal, handleEditModal } = useTodoStore(
    (state) => state
  );

  // * handle complete
  const completeTodo = async (_id) => {
    setLoading(true);
    return await putRouteApi(`todos/complete/${_id}`)
      .then((res) => {
        if (res.status === 201) {
          const {
            data: { message },
          } = res;
          getTodoData();
          setLoading(false);
          return SuccessToast(message);
        }
      })
      .catch((error) => {
        console.log("error:", error);
        return ErrorToast(error.message);
      });
  };

  // * handle delete
  const deleteTodo = async (_id) => {
    return await deleteRouteApi(`/todos/${_id}`)
      .then((res) => {
        if (res.status === 200) {
          const {
            data: { message },
          } = res;
          getTodoData();
          return SuccessToast(message);
        }
      })
      .catch((error) => {
        console.log("error:", error);
        return ErrorToast(error.message);
      });
  };

  return (
    <div className=" flex flex-col items-center w-full">
      <div className="p-2 flex md:w-[620px] w-[280px] items-center justify-between gap-3 border-b border-violet-400 shadow-2xl shadow-black/35 rounded-md">
        <div className="flex items-center gap-5">
          <input
            type="checkbox"
            onChange={handleCheckButton}
            checked={isDone ? true : false}
            disabled={isDone ? true : false}
            className="h-5 w-5 focus:ring-transparent rounded-full border-[3px] border-violet-500 checked: text-violet-500 cursor-pointer disabled:checked:"
            onClick={() => completeTodo(_id)}
          />
          <h3
            className={`md:text-2xl text-lg font-medium text-gray-500 tracking-wide ${
              (isDone && "line-through") || (loading && "animate-bounce")
            }`}
          >
            {loading ? "..." : todoName}
          </h3>
        </div>
        <div className="flex md:gap-5 gap-3 items-center">
          <button onClick={() => handleEditModal(true)}>
            <FiEdit className="md:text-lg text-violet-500 cursor-pointer" />
          </button>
          <button onClick={() => deleteTodo(_id)}>
            <TiDelete className="md:text-2xl text-xl text-violet-500 cursor-pointer" />
          </button>
          {editModal && <Modal type={"Edit Todo"} _id={_id} />}
        </div>
      </div>
    </div>
  );
};

export default Todoitem;
