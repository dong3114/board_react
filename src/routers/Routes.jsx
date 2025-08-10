import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'

export default function AppRoutes() {
  return(
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}


