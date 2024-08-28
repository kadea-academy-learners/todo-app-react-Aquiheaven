// import { useState } from 'react'

// import './App.css'
import {Header } from "./compenents/Header"

function App() {
  // const [count, setCount] = useState(0)
  // const [checked, setChecked] =useState(true)
  // const toggleCheck =() => {
  //   setChecked(!checked)
  // }
  // const  handleSubmit =(e) => {
  //   e.preventDefaut()

  // }
  // return <form onSubmit={handleSubmit}>
  //   <input type="text"  name='nom' />
  //   <input type="checkbox" checked={checked} onChange={toggleCheck} />
  //   <button>envoyer</button>
  // </form>

  // return (
  //   <>

      
  //     <h1>Todo List</h1>
  //     <div className='inserer'>
  //       <form>
  //         <div>
  //           <input type="text" id='task' placeholder='ajout tache' />
  //         </div>
  //         <div>
  //           <button type='submit'> Ajouter</button>
  //         </div>
  //       </form>
  //     </div>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )

  return(
    <Header />
  )
}

export default App
