import React, { useState } from 'react'

function UseState() {
    const [num, setNum] = useState<number | null>(null);// states num can be a number or null
    const handleCount = (e: React.MouseEvent<HTMLButtonElement>) => {
        // e.preventDefault()
        setNum((i) => {
            console.log(i)
            return typeof i === 'number' ? i + 1 : 0 // because 'i' can possibly be null
        })
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>{num}</h1>
            <button onClick={handleCount}>{num}+1</button>
        </div>
    )
}

export default UseState