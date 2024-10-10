import React, { useState } from "react";

function ToDoList() {
  // 할 일 목록을 저장할 상태와 입력 값을 저장할 상태를 useState로 관리
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // 할 일 추가 함수
  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput(""); // 입력 필드를 초기화
    }
  };

  // 할 일 삭제 함수
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
