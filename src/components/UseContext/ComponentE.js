import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext, SecondContext} from '../../App'

function ComponentE() {

	// example for useContext
	const user = useContext(UserContext)
	const second = useContext(SecondContext)
	return (
		<div>
			{user} - {second}
			<ComponentF />
		</div>
	)
}

export default ComponentE