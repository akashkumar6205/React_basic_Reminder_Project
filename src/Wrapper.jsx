import { createContext, useState } from "react"

export const todocontext = createContext(null)

const Wrapper = (props) => {
    const [todos, settodos] = useState([
      {id: 1, title: "Hello", isCompleted: false},
    ])

  return (
    <div><todocontext.Provider value={[todos, settodos]}>
        {props.children}
        </todocontext.Provider></div>
  )
}

export default Wrapper 