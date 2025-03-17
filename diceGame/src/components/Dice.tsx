
interface diceProps{
    side: number;
}

export function Dice({ side }: diceProps){
    const sides: string[] = [
        'https://www.svgrepo.com/show/322173/dice-six-faces-one.svg',
        'https://www.svgrepo.com/show/322178/dice-six-faces-two.svg',
        'https://www.svgrepo.com/show/322175/dice-six-faces-three.svg',
        'https://www.svgrepo.com/show/322172/dice-six-faces-four.svg',
        'https://www.svgrepo.com/show/322170/dice-six-faces-five.svg',
        'https://www.svgrepo.com/show/499120/dice-six.svg'
    ];
    
    return (
        <>
            <img src={ sides[side-1] } width={400} alt="Dado"/>
        </>
    )
}