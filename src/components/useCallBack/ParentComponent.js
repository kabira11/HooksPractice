import React, { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

// useCallback is a hook that will return a memoized version of the callback function 
// that only changes if one of the dependencies has changed.
// why it is used --
// It is useful when passing callbacks
// to optimized child component 
function ParentComponent() {
	const [age, setAge] = useState(25)
	const [salary, setSalary] = useState(50000)

	const incrementAge = useCallback(() => {
		setAge(age + 1)
	}, [age])

	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000)
	}, [salary])

	return (
		<div>
			<Title />
			<Count text="Age" count={age} />
			<Button handleClick={incrementAge}>Increment Age</Button>
			<Count text="Salary" count={salary} />
			<Button handleClick={incrementSalary}>Increment Salary</Button>
		</div>
	)
}

export default ParentComponent