import './App.css'
import Blogs from './component/Blogs/Blogs'
import BookMarks from './component/BookMarks/BookMarks'
import Header from './component/header/header'
function App() {
  

  return (
    <>
      <div className='container mx-auto'>
      <Header></Header>
        <div className='md:flex pt-4'>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
        </div>
      </div>
        
    </>
  )
}

export default App
