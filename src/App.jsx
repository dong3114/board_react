import { BrowserRouter, Routes } from 'react-router-dom'
import AppRoutes from './routers/Routes'
import MainLayout from './pages/mainlayout'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </BrowserRouter>
    </div>    
  )
}