import { useState } from 'react'
import './Counter.css'

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const buttonStyle = 'px-10 py-8 bg-blue-700 text-white text-4xl hover:bg-cyan-500 transition-all duration-500 hover:outline rounded-xl'
    
    function minusOne() {
        setCounter(prev => prev - 1)
    }

    function addOne() {
        setCounter(prev => prev + 1)
    }

    return <>
    <div className="counter-container flex gap-8 px-14 py-16 rounded-3xl">
        <button className={buttonStyle} onClick={minusOne}>-1</button>
        <p className="px-10 py-8 text-white text-6xl font-bold w-40 text-center">{counter}</p>
        <button className={buttonStyle} onClick={addOne}>+1</button>
    </div>
    </>
}