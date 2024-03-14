import React, { useRef } from 'react'

function UseRef() {
    const inputbox = useRef<HTMLInputElement>(null);
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <input type="text" ref={inputbox} />
                <button onClick={() => inputbox.current?.focus()}>Focus</button>
                <button onClick={() => alert("hey👋, " + inputbox.current?.value)}>Display</button>
            </div>
        </>
    )
}

export default UseRef