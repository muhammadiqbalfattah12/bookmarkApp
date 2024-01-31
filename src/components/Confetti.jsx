"use client";
import {useState, useEffect} from 'react';
import ReactConfetti from 'react-confetti';
import { PiConfettiBold } from "react-icons/pi";

const Confetti = () => {
    const [windowDimension, setDimension] = useState ({width: window.innerWidth, height: window.innerHeight});
    const [Btn, setBtn] = useState(false);

    const detectSize = () => {
        setDimension({width: window.innerWidth, height: window.innerHeight});
    }

    useEffect(()=>{
        window.addEventListener('resize', detectSize);
        return () => {
            window.removeEventListener('resize', detectSize);
        }
    }, [windowDimension]);

  return (
    <>
       <button className='flex btn btn-error font-semibold' onClick={()=> setBtn(!Btn)}> Confetti Bun ! <PiConfettiBold /></button>
       {Btn && <ReactConfetti 
        width={windowDimension.width}
        height={windowDimension.height}
        tweenDuration={5000}
        gravity={0.1}/>}

    </>
  )
}

export {Confetti};