import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, editTodo } from '../../Features/todo/TodoSlice';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Tooltip from '@mui/material/Tooltip';

const DeleteTodo = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [editText, setEditText] = useState('');
    const [editModeId, setEditModeId] = useState(null);

    const handleEdit = (id, text) => {
        setEditText(text);
        setEditModeId(id);
    };

    const handleSaveEdit = (id) => {
        dispatch(editTodo({ id: id, text: editText }));
        setEditModeId(null);
    };

    return (
        <>
            {todos.map((todo) => (
                <h2
                    key={todo.id}
                    className="text-sm m-4 p-1 overflow-y-scroll md:w-96 md:mx-auto w-auto rounded-xl bg-slate-700 text-white whitespace-normal"
                >
                    <EditNoteOutlinedIcon /> &nbsp;
                    {editModeId === todo.id ? (
                        <>
                        <div className='flex'>
                            <input
                                type="text"
                                    className="w-full bg-transparent text-white focus:outline-none "
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                            <Tooltip title="Edit">
                                <IconButton aria-label="delete" color="success">
                                <SaveOutlinedIcon onClick={() => handleSaveEdit(todo.id)} />
                                </IconButton>
                            </Tooltip>
                            </div>
                        </>
                    ) : (
                        <>
                            <span className="w-11 flex-wrap">{todo.text}</span>
                            <span className="self-end">
                                <IconButton aria-label="delete" color="error">
                                    <Tooltip title="Delete">
                                        <DeleteIcon onClick={() => dispatch(removeTodo(todo.id))} />
                                    </Tooltip>
                                </IconButton>
                            </span>
                            <span className="self-end">
                                <IconButton
                                    aria-label="edit"
                                    color="success"
                                    onClick={() => handleEdit(todo.id, todo.text)}
                                >
                                    <Tooltip title="Edit">
                                        <ModeEditOutlineIcon />
                                    </Tooltip>
                                </IconButton>
                            </span>
                        </>
                    )}
                </h2>
            ))}

            <div className={`flex mt- lg:flex-row md:flex-row max-xl:flex-col items-center md:w-96 md:mx-auto ${todos.length === 0 ? "block" : "hidden"} `}>
                <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/todo-list-5523307-4609476.png?f=webp"
                    alt=""
                    className="h-80 w-720"
                />
            </div>
            <span className={`xl:text-3xl text-2xl flex justify-center flex-wrap m-2 ${todos.length === 0 ? "block" : "hidden"}`}>
                Welcome to Todo-list
            </span>

            <p className={`flex justify-center flex-wrap m-5 ${todos.length === 0 ? "block" : "hidden"}`}>
                Todolist will help you stay organized and perform your tasks much
                faster.
            </p>
        </>
    );
};

export default DeleteTodo;
