import React from "react";

const Proptypes = (props: { id: number; name: string; isElegible: boolean }) => {
    return (
        <>
            <h1 style={{ border: "1px solid black", margin: 20, padding: 10, borderRadius: 20, width: 'fit-content' }}>{props.id}. <br /> Name: {props.name}
                {props.isElegible ? (
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: "green" }}></div>
                ) : (
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: "red" }}></div>
                )}
            </h1>
        </>
    )
}

export default Proptypes