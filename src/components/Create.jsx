import { Fragment, useState } from "react";
import { nanoid } from "nanoid"


const Create = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;

const [title, settitle] = useState("")

const submitHandler = (e) => {
    e.preventDefault();
// created new data
    const newtodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };
// putting data to set
    let copytodos = [...todos];
    copytodos.push(newtodo);
    settodos(copytodos);
    // making the above three line in one line
    // settodos([...todos, newtodo])

// for empty the title
    settitle("");
};


  return (
    <div className=" w-[60%] p-10 ">
        <h1 className="mb-10 text-5xl font-thin">
            Set <span className="text-red-500">Reminder</span> For <br/>Task 
            </h1>
            <form onSubmit={submitHandler}>
                <input 
                    className="p-2 border-b w-full text-2xl font-thin outline-0"
                    onChange={(e) => 
                    settitle(e.target.value)}
                    value={title}
                    type= "text" 
                    placeholder="title" 
                />
                <br />
                <br />
                    <button className=" mt-5 text-xl px-10 py-2 border rounded">Create Todo</button>
            </form>
    </div>
  );
};

export default Create;