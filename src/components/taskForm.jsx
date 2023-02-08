import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask, updateTask } from '../features/task/taskslice'
import { v4 as uuid } from 'uuid'
import style from '../style/taskForm.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { TaskList } from './taskList'

export const TaskForm = () => {

    const [task, setTask] = useState({
        title: "",
        description: ""
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const paramas = useParams()
    const tasks = useSelector(state => state.task)

    const handleChange = event => {
        setTask({
            ...task,
            [event.target.name]: event.target.value

        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (paramas.id) {

            dispatch(updateTask(task))

        } else {
            dispatch(
                addTask({
                    ...task,
                    id: uuid()
                })
            );
        }
        navigate('/')
    }

    useEffect(() => {
        if (paramas.id) {
            setTask(tasks.find((task) => task.id === paramas.id))
        }
    }, [])

    return (

        <div className={style.contenedor}>
            <h1>Bloc de anotaciones</h1>
            <form onSubmit={handleSubmit} className={style.formulario}>
                <input name='title' type="text" placeholder='titulo' onChange={handleChange} className={style.inputForm} value={task.title} />
                <textarea name="description" cols="30" rows="10" placeholder='description' onChange={handleChange} className={style.description} value={task.description} ></textarea>
                <button className={style.botonSave}>Guardar</button>
            </form>
        </div>
    )
}
