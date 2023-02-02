import { React, useState } from "react";
import { FaListAlt } from "react-icons/fa";
import Modal from "./components/Modal";
import Todoitem from "./components/Todoitem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [status, setStatus] = useState(false);

  const [newTask, setNewTask] = useState(false);
  const [update, setUpdate] = useState(false);

  const [state, setState] = useState({
    todo: "",
    todoList: [],
  });

  const { todo, todoList } = state || {};

  // onChange func
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log("value", value);

    setState({ ...state, [name]: value });
  };

  // check button func
  const checkButton = (index) => {
    const list = todoList;
    list[index] = { ...list[index], status: !status };
    setStatus(!status);
  };

  // modal func
  const handleNewTask = () => {
    setNewTask(!newTask);
    setState({ todo: "", todoList });
  };

  //cancel button
  const cancelButton = () => {
    setNewTask(false);
    setUpdate(false);
  };

  const handleUpdate = () => {
    setUpdate(!update);
    setState({ todo: "", todoList });
  };

  // Create todo
  const createTodo = () => {
    if (!todo) {
      return toast.error("Please input field !", {
        position: "top-right",
        autoClose: 300,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    const list = todoList;
    list.push({ todo, status: false });

    setNewTask(false);
    setState({ todo: "", todoList: list });
    notify();
  };

  // Delete todo
  const deleteTodo = (index) => {
    const list = todoList;
    list.splice(index, 1);

    setState({ todo: "", todoList: list });
  };

  // Toast
  const notify = () =>
    toast.success("Task Added !", {
      position: "top-right",
      autoClose: 300,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div>
      <div className="min-h-screen  bg-slate-200">
        <div className="flex flex-col py-10 mx-80 h-screen">
          <div className="p-4 bg-violet-500/90 flex justify-center items-center gap-5 text-white shadow-2xl rounded-md">
            <FaListAlt className="text-2xl" />
            <h1 className="text-2xl tracking-wide font-bold ">Todo list App</h1>
          </div>
          <div className="bg-white h-full shadow-2xl rounded-lg py-10 mt-5 flex flex-col gap-3">
            {todoList.length ? (
              todoList.map((val, index) => (
                <Todoitem
                  key={index}
                  checkButton={checkButton}
                  index={index}
                  val={val.todo}
                  status={val.status}
                  deleteTodo={deleteTodo}
                  handleUpdate={handleUpdate}
                />
              ))
            ) : (
              <span className="text-center text-2xl font-medium text-gray-500">
                No Task Found
              </span>
            )}
          </div>
          <button
            onClick={handleNewTask}
            className="flex p-3 justify-center -mt-8 z-10 mx-auto bg-violet-500 rounded-full w-[200px] gap-2 text-2xl font-medium items-center text-white border-2 border-violet-500 shadow-xl"
          >
            <span className="text-3xl font-bold">+</span> New Task
          </button>
          {newTask ? (
            <Modal
              cancelButton={cancelButton}
              handleOnChange={handleOnChange}
              todo={todo}
              createTodo={createTodo}
              newTask={newTask}
            />
          ) : null}
          {update ? (
            <Modal
              cancelButton={cancelButton}
              handleOnChange={handleOnChange}
              todo={todo}
              createTodo={createTodo}
              newTask={newTask}
            />
          ) : null}

          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
