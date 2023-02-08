import React from 'react'
import { useSelector } from 'react-redux'
import { TaskForm } from './taskForm'
import { TaskList } from './taskList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {


  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <TaskList/> }/>
          <Route path='/create-task' element={ <TaskForm/> }/>
          <Route path='/edit-task/:id' element={ <TaskForm/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
