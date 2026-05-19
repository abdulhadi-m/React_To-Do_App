import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todo: [{
        id: 1, 
        todo: "xyz",
        completed: false
    }

    ],
    updateTodo: (id, todo) => {},
    addTodo: (idtodo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
    
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider