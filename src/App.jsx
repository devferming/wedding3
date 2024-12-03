import './App.css'
import HomePage from './pages/HomePage'
import HomePage2 from './pages/HomePage2'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage2 />} />
        <Route path='/guest/:id' element={<HomePage />} />
        <Route path='*' element={<HomePage2 />} />
      </Routes>
    </>
  )
}

export default App
