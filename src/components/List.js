import React from 'react';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export default function List({items, editItem, deleteItem }) {
  return (
    <>
    {items.map((item) => {
        const {id, name} = item
        return(
          <article key={id}>
              <h3> {name} </h3>
              <button onClick={() => editItem(id)}> <AiFillEdit /> </button>
              <button onClick={() => deleteItem(id)}> <AiFillDelete /> </button>
          </article>
        )
    })}
    </>
  );
}
