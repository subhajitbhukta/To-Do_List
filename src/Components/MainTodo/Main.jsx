import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Features/todo/TodoSlice";
import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteTodo from "../DeleteTodo/DeleteTodo";
import Switch from '@mui/material/Switch';

const Main = () => {
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("dark");
  const Dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    Dispatch(addTodo(input));
    setInput("");
  };

  const toggleBtnClick = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`${theme === "dark" ? "bg-slate-800" : "bg-sky-300"} ${theme === "dark" ? "text-white" : "text-black"} h-screen w-screen flex flex-col transition-colors duration-500`}>

      <div className={`text-2xl ${theme === "dark" ? "bg-yellow-900" : "bg-orange-400"} ${theme === "dark" ? "text-white" : "text-black"} rounded-2-xl pb-3 flex justify-center pt-5`}>

        To Do List &nbsp;
        <span className="flex gap-3">
          <img
            src="https://cdn.icon-icons.com/icons2/2898/PNG/512/write_notes_exam_icon_182968.png"
            alt=""
            className="h-9 w-9 mx-auto"
          />
          <Tooltip title="Theme">
            <Switch onClick={toggleBtnClick} />
          </Tooltip>
        </span>
      </div>

      <div className="p-5 flex justify-center">
        <input
          className="md:w-72 w-auto border-2 text-black border-gray-300 rounded-lg py-2 pl-12 pr-4 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          type="text"
          placeholder="Write...."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="max-w-screen-lg">
          <span className="md:pl-3 flex">
            <Tooltip title="ADD">
              <Fab size="small" color="success" aria-label="add" onClick={addTodoHandler}>
                <AddIcon />
              </Fab>
            </Tooltip>
          </span>
        </div>
      </div>

      {/* DeleteTodo component here */}
      <DeleteTodo />

      <p className="flex justify-center text-sm mt-auto mb-5 text-gray-500">
        &copy;Subhajit.Bhukta
      </p>
    </div>
  );
};

export default Main;
