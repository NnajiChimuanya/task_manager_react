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
      <div className='main'>
        <div className='title'>
          <h2> Task manager </h2>
        </div>

        <div className='form'>
          <form onSubmit={handleSubmit}>
            
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g read a book" className='input'/>
            <button className='submit-btn' type="submit"> {isEditing ? "Edit Task" : "Add Task"} </button>
          </form>
        </div>
        <div>
            { 
            list.length > 0 && (
              <div className='items'>
               
                <List items={list} editItem={editItem} deleteItem={deleteItem} />
                <div className='clear'>
                  <button onClick={clearItems}> Clear list </button>
                </div>

              </div>
            )
            
            }
          </div>
      </div>
    </div>
 )
}

export default App;


