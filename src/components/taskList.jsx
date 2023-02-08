import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import style from '../style/taskList.module.css'
import { deleteTask } from '../features/task/taskslice'
import { Link } from 'react-router-dom'


export const TaskList = () => {


  // cosntante para ir agregando y mostrando los datos que
  // agregamos en el input
    const task = useSelector(state => state.task)

    console.log(task)

    // Funcion de eliminar
    const dispatch = useDispatch()

    const handleDelete = (id) => {

      dispatch(deleteTask(id))

    }


  return (
    <div className= {style.contenedor}>
      <header>
        <h1 className= {style.Contador}>Nº Listas:<a className= {style.numeroLongitud}> {task.length} </a> </h1>
        <Link to= 'create-task' className= {style.create}>
        create task</Link>
      </header>
        {task.map(task =>(
            <div key={task.id} className = {style.lista} >
                <a className= {style.Titulo}>{task.title}</a>
                <p className= {style.description}>{task.description}</p>
                <button onClick={() => handleDelete (task.id) } className={style.botonDelete} >Delete</button>
                <Link className= {style.editar} to= {'/edit-task/' + task.id} >Editar</Link>
            </div>
        ))}
    </div>
  )
}
