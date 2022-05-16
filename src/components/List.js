import React from 'react';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export default function List({items, editItem, deleteItem }) {
  return (
    <>
    {items.map((item) => {
        const {id, name} = item
        return(
          <section key={id}>
              <p className='itemName'> {name} </p>
              <button onClick={() => editItem(id)}> <AiFillEdit /> </button>
              <button onClick={() => deleteItem(id)}> <AiFillDelete /> </button>
          </section>
        )
    })}
    </>
  );
}
