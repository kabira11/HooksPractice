import React from 'react'

function Namelist() {
    const names = ['pankaj' , 'tryambak' , 'subhashree' , 'nisarg']
    const nameList =  names.map(name => <h2>{name}</h2>)
  return (
    <div>
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}

    {/* Alter way of showing name */}
    {
        nameList
    }
    </div>
  )
}

export default Namelist
