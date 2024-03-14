import React from 'react'

function Parent({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1>Parent</h1>
            {children}
        </>
    )
}

export default Parent