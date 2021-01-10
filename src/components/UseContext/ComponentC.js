import React from 'react'
import ComponentE from './ComponentE'


// There are 3 step to implement for UseContext

// 1. create the context and will create in App.js at line number 39
// 2. we need to provide this context with a value and provider
// must wrap the children components for the value to be available


function ComponentC() {
	return (
		<div>
			<ComponentE />
		</div>
	)
}

export default ComponentC