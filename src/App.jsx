
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Component';
import { Home, Courses, CourseDetails, News, Register } from './Pages';
import './App.css'

function App() {
  

  return (
    <>
    <Navbar />
    <div className="main-layout flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <main className="content flex-1">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/coursedetails/:id" element={<CourseDetails />} />
            <Route path="/news" element={<News />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
  </div>
</>
  )
}

export default App
