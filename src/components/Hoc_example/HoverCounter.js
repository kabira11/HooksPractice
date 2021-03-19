import React from 'react'
import HocCmp from "./HocCmp"

function HoverCounter(props) {
    const {count , increment} = props
    return (
        <div onMouseOver={increment}>
            Hover {count} times
        </div>
    )
}

export default HocCmp(HoverCounter,5)
