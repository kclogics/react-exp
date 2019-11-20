import React, { useContext } from 'react'

import {BookList} from './home1.js'

function Book(props) {
  const theme = useContext(ThemeContext)
  const styles = {
    dark: { background: 'black', color: 'white' },
    light: { background: 'white', color: 'black' }
  }
  return (
    <li style={styles[theme]}>
      <h2>{props.title}</h2>
      <div>{props.author}</div>
    </li>
  )
}


const ThemeContext = React.createContext('dark')

function BookPage() {
  return (
    <ThemeContext.Provider value="light">
      <BookList />
    </ThemeContext.Provider>
  )
}

export default function Home4() {
    return (
    <>
    <h2>Home4</h2>
    <BookPage />
 
    </>
    )
  }
