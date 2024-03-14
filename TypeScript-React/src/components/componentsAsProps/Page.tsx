import React from 'react'
import Parent from './Parent'
import Child from './Child'

function Page() {
    return (
        <div style={{ textAlign: "center" }}>
            <Parent >
                <Child />
            </Parent>
        </div>
    )
}

export default Page