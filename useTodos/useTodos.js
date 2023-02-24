import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const handleAddTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };

    dispatchTodo(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: id,
    };

    dispatchTodo(action);
  };

  return { todos, handleAddTodo, handleDeleteTodo, handleToggleTodo,todosCount: todos.length,
    pendingTodos:todos.filter(todo => !todo.done).length };
};
