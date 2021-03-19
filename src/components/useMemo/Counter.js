import React, {useState, useMemo} from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)


    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven =  useMemo(() => {
        // this logic for taking some time
        let i = 0 ;
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    // const isEven = () => {
    //     // this logic for taking some time
    //     let i = 0 ;
    //     while (i < 2000000000) i++
    //     return counterOne % 2 === 0
    // }

    // useMemo is a hook that will only recompute the cached value when one of the dependencies has changed 
    // this optimisation heads to avoid expensive calculations on rerender.
    

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count one - {counterOne}</button>
                <span>{isEven ? "Even" : "Odd"}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter