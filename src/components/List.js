import React from 'react';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export default function List({items, editItem, deleteItem }) {
  return (
    <>
    {items.map((item) => {
        const {id, name} = item
        return(
          <section className='section' key={id}>
              <p className='itemName'> {name} </p>
              <button className='edit-btn' onClick={() => editItem(id)}> <AiFillEdit /> </button>
              <button className='delete-btn' onClick={() => deleteItem(id)}> <AiFillDelete /> </button>
          </section>
        )
    })}
    </>
  );
}
