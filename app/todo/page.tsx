"use client";
import React, { useEffect, useState } from "react";
import { FaPen, FaPlus, FaTrash } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export default function Page() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) setTodos(JSON.parse(savedTodos));
  }, []);

  useEffect(() => {
    if (todos.length > 0) localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (todo.trim()) {
      setTodos([...todos, { id: uuidv4(), text: todo, isCompleted: false }]);
      setTodo("");
    }
  };

  const handleDelete = (id: string) =>
    setTodos(todos.filter((item) => item.id !== id));

  const handleEdit = (id: string) => {
    const todoToEdit = todos.find((item) => item.id === id);
    if (todoToEdit) {
      const newText = prompt("Edit your todo:", todoToEdit.text);
      if (newText !== null) {
        setTodos(
          todos.map((item) =>
            item.id === id ? { ...item, text: newText } : item
          )
        );
      }
    }
  };

  const handleToggle = (id: string) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="my-4 mx-auto max-w-md sm:max-w-lg p-4">
      <h1 className="text-center text-3xl sm:text-4xl font-bold mb-4 text-slate-100 montserrat-400">
        Just Do It..
      </h1>
      <div className="bg-slate-900 rounded-2xl px-6 py-4 shadow-md lexend-400">
        {/* Input Section */}
        <div className="flex items-center justify-center mb-4 space-x-2 border-b border-gray-800 pb-3 px-4 lg:mx-4 ">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="flex-grow w-full sm:w-auto rounded-full p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-500 text-center text-sm sm:text-base"
            placeholder="Add a new todo"
          />
          <button
            onClick={handleAdd}
            className="p-2  bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all text-sm sm:text-base"
          >
            <FaPlus />
          </button>
        </div>

        {/* Today's Task Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-slate-800 rounded-xl p-3 mb-4 shadow-md">
          <span className="text-white font-semibold mx-1 text-sm sm:text-base">
            Total Tasks: {totalTasks}
          </span>
          <span className="text-green-400 font-semibold mx-1 text-sm sm:text-base">
            Completed: {completedTasks}
          </span>
        </div>

        {/* Scrollable Task List Section */}
        <div className="max-h-96 overflow-y-auto scroll-smooth">
          <ul className="space-y-3">
            {todos.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-gray-800 p-3 rounded-xl shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={item.isCompleted}
                    onChange={() => handleToggle(item.id)}
                    className="mr-3 w-5 h-5 accent-blue-600 rounded-full shadow-md"
                  />
                  <span
                    className={`text-white ${
                      item.isCompleted
                        ? "line-through text-gray-400"
                        : "font-medium"
                    } text-sm sm:text-base`}
                  >
                    {item.text}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-600 transition-all text-sm"
                  >
                    <FaPen />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-600 transition-all text-sm"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
