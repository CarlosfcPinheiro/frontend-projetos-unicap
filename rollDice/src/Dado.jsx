import React from 'react';

export default function Dado({ lado }){
    const lados = [
        'https://www.svgrepo.com/show/322173/dice-six-faces-one.svg',
        'https://www.svgrepo.com/show/322178/dice-six-faces-two.svg',
        'https://www.svgrepo.com/show/322175/dice-six-faces-three.svg',
        'https://www.svgrepo.com/show/322172/dice-six-faces-four.svg',
        'https://www.svgrepo.com/show/322170/dice-six-faces-five.svg',
        'https://www.svgrepo.com/show/499120/dice-six.svg'
    ]
    
    return (
        <>
            <h3>Você tirou um dado de lado { lado }</h3>
            <img src={ lados[lado-1] } width={400} alt={ lado }/>
        </>
    )
}