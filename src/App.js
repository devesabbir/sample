
import { Route, Routes } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/booking' element={<BookingPage/>} />
          <Route path='/product' element={<ProductPage/>} />
      </Routes>
    </>
  )
  
}

export default App;
