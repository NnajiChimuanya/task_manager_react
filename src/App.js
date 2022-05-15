import React, { useState } from 'react';
import List from './components/List';


function App() {
  const [name, setName] = useState("")
  const [list, setList] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault()

    setList([...list, name])
  }

 return (
   <div className="container">
     <form onSubmit={handleSubmit}>
       <h2> Task manager </h2>
       <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
       <button type="submit"> Add Task</button>
      </form>
      <div>
        { list && <List items={list} />}
      </div>
   </div>
 )
}

export default App;


