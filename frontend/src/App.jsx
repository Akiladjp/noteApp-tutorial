import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

function App() {

  return (
    <>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
