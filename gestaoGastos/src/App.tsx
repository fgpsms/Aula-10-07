import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todos from "./assets/Todos";
import Posts from "./assets/Posts";
import ControleGastos from "./ControleGastos";

function App() {
  
return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ControleGastos />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/todos/todoId" element={<Todos />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  </BrowserRouter>
);
}
export default App
