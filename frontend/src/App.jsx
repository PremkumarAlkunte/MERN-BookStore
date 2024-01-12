import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import CreateBook from './pages/createBook.jsx'
import DeleteBook from './pages/deleteBook.jsx'
import Editbook from './pages/editbook.jsx'
import ShowBook from './pages/showBook.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<Editbook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
    </Routes>

    // <div>
    //   Hello Bhoomi
    // </div>
  )
}

export default App
