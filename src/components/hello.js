import React from 'react';

const hello = () =>{
    
    // return (
    //     <div>
    //         <h4>This is with JSX</h4>
    //     </div>
    // )

    return React.createElement (
        'div',
        {id : "test" , className : "check"},
        React.createElement('h1', null , 'This is without JSX')
    )
}

export default hello;