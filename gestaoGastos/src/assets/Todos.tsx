import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todos: React.FC = () => {
    const {todoId} = useParams();
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        axios("https://jsonplaceholder.com/todos")
        .then(response => setTodos(response.data)); 
})
  return (
    <div>
      <Header />
      <h2>Lista de Todos{todoId && ' - ID: ${todoId}'}</h2>
    </div>
  );
};

export default Todos;
