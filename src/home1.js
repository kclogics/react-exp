
// From Parent to Child with Props


import React, {Component, useState} from "react";

import {list} from './db/data1'


// const list = [
//   { title: 'A Christmas Carol', author: 'Charles Dickens' },
//   { title: 'The Mansion', author: 'Henry Van Dyke' },
//   // ...
// ]

function Book(props) {
  return (
    <>
    <li>
      <h2>{props.title}</h2>
      <div>{props.author}</div>
    </li>
    </>
  )
}

export function BookList() {
 

  return (
    <>
    <ul>
      {list.map((book, i) => <Book title={book.title} author={book.author} key={i} />)}
    </ul>
    </>
  )
}

export default function Home1() {
    return (
    <>
    <h2>Home1</h2>
    <BookList />
    </>
    )
  }

 