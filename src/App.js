// import logo from './logo.svg';
import './App.css';
import { FaHome } from "react-icons/fa";

// import Hello from './01/Hello' ;
// import MyDiv from './02/MyDiv';
// import CardMain from './03/CardMain';
import BoxOffice from './04/BoxOffice';

function App() {
  return (
    <div className="App-header">
    <main className='flex flex-col justify-center items-center
                      w-full md:w-4/5
                      h-full'>
      <header className='w-full h-16 bg-slate-200
                         flex justify-between
                         p-5 text-slate-800'>
        <h1 className='text-xl font-bold'>리액트실습</h1>
        <div><FaHome /></div>
      </header>
      <div className="w-full grow 
                    flex flex-col justify-center items-center">
          {/* <Hello />  */}
          {/* <MyDiv /> */}
          {/* <CardMain /> */}
          <BoxOffice />
      </div>
      <footer className='w-full h-16
                          flex justify-center items-center
                         bg-black text-slate-200'>
        <p className='text-sm font-bold'>
          2024 여름 계절학기 소프트웨어융합기초1
        </p>
      </footer>
    </main>
    </div>
  );
}

export default App;
