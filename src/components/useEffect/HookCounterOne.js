import React, {useEffect, useState} from 'react'

export default function HookCounterOne() {
    const [count, setCount] = useState(0)

    // UseEffect runs after every render
    useEffect(() => {
        document.title = `you clicked ${count} times..`
    })

    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
      </div>
    )
}
