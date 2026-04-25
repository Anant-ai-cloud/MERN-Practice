import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {

  const [person, setPerson] = useState("")
  const [data, setData] = useState(null)

  const fetchingData = async()=>{
      const res = await fetch(`https://api.github.com/search/users?q=${person}&page=1&per_page=20`)
      const newData = await res.json()
      setData(newData.items)
     console.log(newData.items)
  }

return(
    <>
    <div className='mt-4'>
      <div>
      <input className='w-72 h-8 border border-black border-2 ml-52 p-2' onChange={(e)=> setPerson(e.target.value)}/>
      <button className='btn ml-4 bg-blue-200 p-2 border rounded-md' onClick={fetchingData}> Search </button>
      </div>
      
      <div>
        {data?         
        <img src={`${data[0].avatar_url}`} alt="" />
        : null
        }

      </div>
          </div>
    </>
  )
}

export default App
