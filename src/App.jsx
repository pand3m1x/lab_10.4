import './App.css'
import { Routes,Route } from 'react-router-dom'
import Blog from './components/blog/Blog'


function App() {
  

  return (
    <div style={{border:"2px solid green", borderRadius:"10px"}}>
      <Routes>
        <Route path="/" element ={<Blog />}></Route>
      </Routes>
    </div>
  )
}

export default App
