import React from 'react'

function Events() {

    /*
        Event: React.EventName<Element>
        example-  event: React.MouseEvent<HTMLButtonElement>
    */
    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("input change triggered")
        console.log(e)
    }
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log("button click triggered")
        console.log(e)
    }
    const handleAlert = (e: React.MouseEvent<HTMLButtonElement>, n: number) => {
        e.preventDefault();
        alert(`Button says Alert 10 but parameter ${n} is passed`)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <input type='text' onChange={handlechange} />
            <button onClick={handleClick}>Button</button>
            <button onClick={(e) => handleAlert(e, 29)}>Alert 10 (passing arguments</button>
        </div>
    )
}

export default Events