import React, {useState} from 'react'

const HocCmp =  (OriginalCmp, incremen ) => {

    function NewComponent () {

            const [count, setCount] = useState(0)

            const increment = () => {
                setCount(prevState => prevState + incremen)
            }
            return (
                <OriginalCmp
                    increment={increment}
                    count = {count}
                    
                />
            )

    }

    return NewComponent;

}

export default HocCmp
