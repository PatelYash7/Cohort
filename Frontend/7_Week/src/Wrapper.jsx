import React from 'react'

function Wrapper() {
  return (
    
    <div>
    <Child>
        <p>Hello</p>
        <button>Button btn</button>
    </Child >
    <div>Hello world</div>
    </div>
  )
}

function Child({children}){
    return(
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
            {children}
        </div>
    )
}

export default Wrapper