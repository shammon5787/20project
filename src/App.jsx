import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/page/Home'
import Cart from './components/page/Cart'
import { Provider } from 'react-redux'
import store from './components/store/store'
import Navbar from './components/navbar/Navbar'
import ImageCategory from './components/menu/ImageCategory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/images' element={<ImageCategory />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
