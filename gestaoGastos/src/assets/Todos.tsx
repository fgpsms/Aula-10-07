import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";

const Todos: React.FC = () => {
const {todoId} = useParams();

  return (
    <div>
      <Header />
      <div>Lista de Todos - ID: {todoId}</div>
    </div>
  );
};

export default Todos;
