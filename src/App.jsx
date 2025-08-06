import { BrowserRouter, Routes } from 'react-router-dom'
import { AppRoutes } from './routers/Routes'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <AppRoutes />
        </Routes>
      </BrowserRouter>
    </div>    
  )
}

export default App
