import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
   const [fact, setFact] = useState("")
   const [count, setCount] = useState(0)

   async function getFact() {
     const res =  await fetch('https://catfact.ninja/fact')    
     // now convert the response above to JSON
     const data = await res.json()
     //console.log(data)
     setFact(data.fact)
     // set the current count to count+1
     setCount((c) => c+1)
   }

  useEffect(function(){
    getFact()
  },[])

  return (
    <>
      <div class="card">
        <h1>Get a cat fact</h1>
        <h2>{fact}</h2>
        <button onClick={getFact}>Get</button>
      </div>
    </>
  )
}

