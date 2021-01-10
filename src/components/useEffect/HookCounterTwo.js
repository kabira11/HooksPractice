import React, {useEffect, useState} from 'react'

export default function HookCounterTwo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // UseEffect runs after every render
    // for useEffect conditionally render we passing second parameter array -- in below example it wil rerender on count change
    // for only one time render we need to add empty array i.e [] to second param it works like similar as a componentDidMount()
    useEffect(() => {
        console.log("updating object")
        document.title = `you clicked ${count} times..`
    },[count])

    return (
      <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
      </div>
    )
}
