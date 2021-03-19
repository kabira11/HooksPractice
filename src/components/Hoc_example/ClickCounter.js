import React from 'react'
import HocCmp from "./HocCmp"

function ClickCounter(props) {
    const {count , increment} = props;
    return (
        <div>
            <button onClick={increment}>
                Button {count} times
            </button>
        </div>
    )
}

export default HocCmp(ClickCounter,2)
