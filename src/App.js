// import logo from './logo.svg';
import './App.css';
import { FaHome } from "react-icons/fa";
// 라우팅
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Hello from './01/Hello';
import MyDiv from './02/MyDiv';
import CardMain from './03/CardMain';
import BoxOffice from './04/BoxOffice';
import GalMain from './05/GalMain';
import Final from './test/Final';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full max-w-screen-xl h-screen mx-auto overscroll-y-auto">
        <header className='flex justify-between items-center 
                          text-xl font-bold h-20 p-10 bg-slate-200'>
          <h1 className='text-xl font-bold'>리액트실습</h1>
          <ul className='text-lg font-bold 
                       flex justify-center items-center'>
            <li className='px-5 rounded-sm 
                         hover:text-blue-700 hover:cursor-pointer
                        '>
              <Link to='/'>시계</Link>
            </li>
            <li className='px-5 rounded-sm 
                         hover:text-blue-700 hover:cursor-pointer
                        '>
              <Link to='/probs'>probs</Link>
            </li>
            <li className='px-5 rounded-sm 
                         hover:text-blue-700 hover:cursor-pointer
                        '>
              <Link to='/card'>card</Link>
            </li>
            <li className='px-5 rounded-sm 
                         hover:text-blue-700 hover:cursor-pointer
                        '>
              <Link to='/box'>BoxOffice</Link>
            </li>
            <li className='px-5 rounded-sm 
                         hover:text-blue-700 hover:cursor-pointer
                        '>
              <Link to='/gal'>사진정보</Link>
            </li>
            <li className='px-5 rounded-sm 
                         hover:text-blue-700 hover:cursor-pointer
                        '>
              <Link to='/final'>기말고사</Link>
            </li>
          </ul>
          <div>
            <Link to='/'><FaHome /></Link>
          </div>
        </header>
        <main className='grow w-full flex justify-center items-center overflow-y-auto '>
          <Routes>
            <Route path='/' element={<Hello />} />
            <Route path='/probs' element={<MyDiv />} />
            <Route path='/card' element={<CardMain />} />
            <Route path='/box' element={<BoxOffice />} />
            <Route path='/gal' element={<GalMain />} />
            <Route path='/final' element={<Final />} />
          </Routes>

        </main>
        <footer className='flex justify-center items-center 
                        h-20 bg-black text-slate-100'>
          <p className='text-sm font-bold'>
            2024 여름 계절학기 소프트웨어융합기초1
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;