import { BrowserRouter, Routes } from 'react-router-dom'
import { AppRoutes } from './routers/Routes'

export default function App() {
  return (
    <div>
      <BrowserRouter>

          <AppRoutes />

      </BrowserRouter>
    </div>    
  )
}