
import './App.css'
import BookMarks from './Component/BookMarks/BookMarks'
import Blogs from './Component/Blogs/Blogs'
import Header from './Component/header/Header'

function App() {
  

  return (
    <>
         <Header></Header>
         <div className='md:flex'>
         <Blogs></Blogs>
         <BookMarks></BookMarks>
         </div>
    </>
  )
}

export default App
