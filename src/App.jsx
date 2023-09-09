import { useState } from 'react';

import './theme.css';

import './App.css'

function App() {
  const [person, changeName] = useState("sara");
  const [age, setAge] = useState("28")
  const [count, setCount] = useState(0)

  const [theme, settheme] = useState("");


  return (
    <div  className={` App ${theme}`}>
    <div>
      <button onClick={() => { settheme("light")}} style={{marginRight:"26px"}}>light</button>
      <button  onClick={() => { settheme("dark")}} style={{marginRight:"26px"}}>dark</button>
      <button  onClick={() => { settheme("grey")}} style={{marginRight:"26px"}}>gray</button>
      <button  onClick={() => { settheme("pink")}}>pink</button>
    </div>

      <div>
         <h2 style={{marginTop:"66px"}}>My name is {person}</h2>
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
      
    </div>
  )
}

export default App
