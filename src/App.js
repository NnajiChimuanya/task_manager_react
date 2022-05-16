import React, { useState } from 'react';
import List from './components/List';


function App() {
  const [name, setName] = useState("")
  const [list, setList] = useState([])
  const [ isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault()

    if(!name) {
      //will set up later
    } else if(name && isEditing) {
      setList(list.map(item =>{
        if(item.id === editId) {
          return {...item, name : name}
        }
        return item
      }))
      setName("")
      setEditId(null)
      setIsEditing(false)
    } else {
      let newItem = { id: new Date().getMilliseconds(), name : name}
      setList([...list, newItem])
      setName("")
    }

  }

  const editItem = (id) => {
    
    let theItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditId(theItem.id)
    setName(theItem.name)

  }

  const deleteItem = (id) => {
    let newItems = list.filter(item => item.id !== id)
    setList(newItems)
  }

  const clearItems = () => {
    setList([])
  }

 return (
   <div className="container">
     <form onSubmit={handleSubmit}>
       <h2> Task manager </h2>
       <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
       <button type="submit"> {isEditing ? "Edit Task" : "Add Task"} </button>
      </form>
      <div>
        { 
        list.length > 0 && (
          <div className='items'>
            <List items={list} editItem={editItem} deleteItem={deleteItem} />
            <button onClick={clearItems}> Clear list </button>
          </div>
        )
        
        }
      </div>
     
   </div>
 )
}

export default App;


