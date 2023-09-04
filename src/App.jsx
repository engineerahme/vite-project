import { useState } from 'react'

import './App.css'

function App() {
  const [person, changeName] = useState("sara");
  const [age, setAge] = useState("28")



  const [count, setColor] = useState(0)

  return (
    <>
    
      <div>
         <h2>My name is {person}</h2>
         <button onClick={() => { changeName("Sally") }}>Change Name </button>
      </div>

      <br />

      <div>
         <h2>My age is {age} </h2>
         <button onClick={() => { setAge("30") }}>Change Name  </button>
      </div>

      <br />
      <br />

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      
    </>
  )
}

export default App
