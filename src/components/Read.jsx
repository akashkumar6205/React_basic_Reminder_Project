import { useContext } from "react";
import { toast } from "react-toastify"
import { todocontext } from "../Wrapper";

const Read = (props) => {
  const [todos, settodos] = useContext(todocontext);

const rendertodos = todos.map((todo) => {
    return (
      <li key={todo.id} className="mb-2 flex justify-between items-center p-4 bg-gray-900">
            <span className="text-xl font-thin">{todo.title}</span>
            <button className="text-sm font-thin text-red-400" 
            onClick={() => DeleteHandler(todo.id)}>Delete</button>
      </li>
    );
});

// this is parameterise function because we are giving id to it 
const DeleteHandler = (id) => {
    const filteredtodo = todos.filter((todo) => todo.id != id);
    settodos(filteredtodo);
    toast.error("Task Deleted")
}

  return (
    <div className="w-[40%] p-10">
        <h1 className="mb-10 text-5xl font-thin"><span className="text-pink-400">pending</span> Todo</h1>
        <ol>{rendertodos}</ol>
    </div>
  );
};

export default Read;