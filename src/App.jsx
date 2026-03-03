import './App.css'
import { Routes,Route } from 'react-router-dom'
import Blog from './components/blog/Blog'
import BlogDetail from './components/blog/BlogDetail'


function App() {
  

  return (
    <div style={{border:"2px solid green", borderRadius:"10px"}}>
      <Routes>
        <Route path="/" element ={<Blog />}></Route>
        <Route path="/blog-detail" element={<BlogDetail />}></Route>
      </Routes>
    </div>
  )
}

export default App
