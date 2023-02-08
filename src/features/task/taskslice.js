import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "Titulo de preuba",
        description: "Esta es la descripcion del titulo de prueba",
        completed: false
    }
]


export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {

        // Accion para agregar los objetos que le estamos añadiendo
        // en le input

        addTask: (state, action) => {

            state.push(action.payload)

        }, 

        // Este siguiente objeto realizara la accion de eliminar los 
        // objetos que estan guardados


        deleteTask: (state, action) => {
           const taskFound = state.find(task => task.id === action.payload)

           if (taskFound){
            state.splice(state.indexOf(taskFound), 1)
           }
        },

        updateTask: (state, action) => {

            const {id, title, description} = action.payload

            const foundTask = state.find(task => task.id === id)

            if (foundTask){
               foundTask.title = title 
               foundTask.description = description
            }
            
        }

    }
})



export const { addTask, deleteTask, updateTask } = taskSlice.actions
export default taskSlice.reducer