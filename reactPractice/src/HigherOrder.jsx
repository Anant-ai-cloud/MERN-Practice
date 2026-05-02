import React from 'react'

function HigherOrder(WrappedComponent) {
  return function Authentication(props){
    let present = localStorage.getItem("token")
    if(!present) return <h1>Login to continue</h1>
    return <WrappedComponent {...props}/>

  }
}

export default HigherOrder
//Higher order component
