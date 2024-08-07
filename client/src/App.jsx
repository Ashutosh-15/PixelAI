import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import { Home, CreatePost } from './pages';
import { PixelAI } from './assets';

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-[#AED2FF] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to="/">
          <img src={PixelAI} alt="PixelAI" className='w-28 object-contain h-16'/>
        </Link>

        <Link to="/create-post" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
          Create
        </Link>
      </header>

      <main className='sm:p-8 px-4 py-8 w-full bg-[#E4F1FF] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create-post" element={<CreatePost/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App