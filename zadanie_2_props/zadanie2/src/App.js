import React from "react"

export default function App() {
    const [count, setCount] = useState(0);
    function Add() {
        useState(count => count + 1)
    }
    function Sub() {
        useState(count => count - 1)
    }

    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={() =>Add()}
            >–</button>
            <div className="counter--count" >
                <h1>{useState()}</h1>
            </div>
            <button className="counter--plus" onClick={() =>Sub()}>+</button>
        </div>
    )
}
