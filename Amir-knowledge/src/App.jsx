import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import BookMarks from './component/BookMarks/BookMarks'
import Header from './component/header/header'
function App() {
  
  const [ Bookmarks , setBookmarks] = useState([]);

  const handlesBooksMark = blog =>{
      console.log("BooksMarks add soon")
  } 

  return (
    <>
      <div className='container mx-auto'>
      <Header></Header>
        <div className='md:flex pt-4 gap-10'>
        <Blogs handlesBooksMark={handlesBooksMark}></Blogs>
        <BookMarks></BookMarks>
        </div>
      </div>
        
    </>
  )
}

export default App
