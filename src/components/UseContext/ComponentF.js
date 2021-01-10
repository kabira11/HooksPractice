import React from 'react'
import {UserContext, SecondContext} from '../../App'

function ComponentF() {
	return (
		<div>
			<UserContext.Consumer>
				{
					user => {
						return (
							<SecondContext.Consumer>
								{
									second => 
									{
									return <div>User context value {user} {second}</div>
									}
								}
							</SecondContext.Consumer>
						)
						
					}
				}
			</UserContext.Consumer>
		</div>
	)
}

export default ComponentF