import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import BooksList from './components/books/BooksList'
import Error from './components/Error'
import BooksView from './components/books/BooksView'
import BooksEdit from './components/books/BooksEdit'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <nav>
   
      <Link to="/books-list">Books-list</Link>
    </nav>
    <Routes>
      
      <Route path='/books-list' element={<BooksList/>}></Route>
      <Route path='/books-view/:bookId' element={<BooksView/>}></Route>
      <Route path='/book-edit/:bookId' element={<BooksEdit/>}></Route>
      <Route path="/*" element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
