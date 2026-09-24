import { nanoid } from "nanoid"
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";


const Create = () => {
   const [todos, settodos] = useContext(todocontext);

const {
    register,  //for two way binding
    handleSubmit, //submission
    reset, //for reset form
    formState: {errors}, //for finding error 
} = useForm()


// on submit this it will create an new data
const submitHandler = (data) => {
    data.isComplete = false;
    data.id = nanoid();

const copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos);
     
    toast.success("Task Created!")

// for clear the title
    reset();
}

return (
    <div className=" w-[60%] p-10 ">
        <h1 className="mb-10 text-5xl font-thin">
            Set <span className="text-red-500">Reminder</span> For <br/>Task 
            </h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <input
                    {...register("title", 
                        {required: "title can not be empty"})}
                    className="p-2 border-b w-full text-2xl font-thin outline-0"
                    type= "text" 
                    placeholder="title" 
                />
                <small className="font-thin text-red-400">{errors?.title?.message}</small>
                <br />
                <br />
                    <button className=" mt-5 text-xl px-10 py-2 border rounded">Create Todo</button>
            </form>
    </div>
  );
};

export default Create;