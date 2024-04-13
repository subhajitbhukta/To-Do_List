import { createSlice, nanoid } from "@reduxjs/toolkit";

const getLocalItems = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  }
  return [];
};

const initialState = {
  todos: getLocalItems() || [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      localStorage.setItem("list", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("list", JSON.stringify(state.todos));
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToEdit = state.todos.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.text = text;
        localStorage.setItem("list", JSON.stringify(state.todos));
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
