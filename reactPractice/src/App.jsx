import React, { useCallback, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import usePrevious from './usePrevious.jsx'

const Child = React.memo(({onClick, value})=>{
  console.log("child rendered")

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  )
})

function App() {

  const[count, setCount] = useState(0)
  const [items, setItems] = useState(null)
  const[other, setOther] = useState(0)

  useEffect(()=>{

    const res = fetch("https://dummyjson.com/products").then((res)=> res.json()).then((data)=> setItems(data.products))
    


      
  },[])
  console.log(items)
    

  const expensiveCalc = useMemo(()=>{
    console.log("Calculating...")
    return count * 2
  }, [count])

  const handleClick = useCallback(()=>{
    console.log("button Clicked")
  },[])

  // const prev = usePrevious(count)


  return (
    <div>
      <h1>Count: {count} </h1>
      <h1>Other: {other} </h1>
      

    <button onClick={()=> setCount(count+1)}>Increase Count</button>
    <button onClick={()=> setOther(other+1)}>Increase Other</button>
    <Child onClick={handleClick} value={expensiveCalc}/>
    {/* <div>{prev}</div>
    <button onClick={()=> setCount((e)=> e+1)}>Button</button>
    <div>{count}</div> */}

    {items? items.map((i)=><><div key={i.id}>{i.title} </div>, <img src={i.images[0]}/> </> ) : null}
    </div>
  )
}

export default App
