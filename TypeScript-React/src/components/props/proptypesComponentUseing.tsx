import React from 'react'
import Proptypes from './proptypes';


type data = {
    id: number,
    name: string;
    isElegible: boolean
} //this can be stored in a types file and exporder from there

const dummydata: data[] = [
    {
        id: 1,
        name: "charan",
        isElegible: true
    },
    {
        id: 2,
        name: "kiran",
        isElegible: false
    },
    {
        id: 3,
        name: "john",
        isElegible: true
    },
    {
        id: 4,
        name: "Mandan",
        isElegible: true
    },
    {
        id: 5,
        name: "kishore",
        isElegible: false
    },
]


function ProptypesComponentUseing() {
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                {
                    dummydata.map(item => (
                        <Proptypes key={item.id} id={item.id} name={item.name} isElegible={item.isElegible} />
                    ))
                }
            </div>
        </>
    )
}

export default ProptypesComponentUseing