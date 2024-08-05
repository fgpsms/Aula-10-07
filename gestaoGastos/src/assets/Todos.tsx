import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  complete: boolean;
}

const Todos: React.FC = ( ) => {
    const { todoId } = useParams();
    const [todos, setTodos] = useState<Todo[]>([]);
    console.log("todos:", todos);

    useEffect(() => {
        axios("https://jsonplaceholder.com/todos").
        then((response) => setTodos(response.data))
    },[])
  return (
    <div>
      <Header />
      <h2>Lista de Todos{todoId && " - ID: ${todoId}"}</h2>
      <div>
        {todos?.map((todo: Todo) => (
          <div>
            <h5>{todo.title}</h5>
            <span>ID:{todo.id}</span>
            <span>Usuario:{todo.userId}</span>
            <span>{todo.complete ? "concluido" : "pendente"}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
