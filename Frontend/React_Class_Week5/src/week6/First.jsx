import React from 'react'
function First() {
    return (
      <div>
        <Header title="my name is harkirat" />
        <Header title="My name is raman" />
      </div>
    )
  }
  
  function Header({title}) {
    return <div>
      {title}
    </div>
  }
  
  export default First
