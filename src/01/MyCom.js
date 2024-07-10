import clock from './colock.png' ;
import './MyCom.css' ;
import { useEffect, useState } from 'react';

function MyCom() {
  const [time, setTime] = useState(new Date()) ;
  useEffect(()=>{
    const tm = setInterval(()=>{
      setTime(new Date())
    }, 1000) ;

    return ()=>{
      clearInterval(tm) ;
    }
  }, [])
  
  
  const mycomDiv = {
    width : '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }

  return (
    <div style={mycomDiv}>
      <p className='mycomP'>
        <img src={clock} alt='시계' style={{'width':'400px'}} />
      </p>
      <p className='text-black'>
        현재 시간 : {time.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default MyCom ;