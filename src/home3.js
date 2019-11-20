
import React, { useReducer, useContext } from 'react'
import ReactDOM from 'react-dom'

const MyContext = React.createContext(null)

const initialState = {
  username: null,
  gender: null,
  age: null
}

const UPDATE_USER = 'UPDATE_USER'
const SET_GENDER = 'SET_GENDER'
const SET_AGE = 'SET_AGE'

function reducer(state, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        username: action.username,
        gender: null,
        age: null
      }
    case SET_GENDER:
      return {
        username: state.username,
        gender: action.gender,
        age: null
      }
    case SET_AGE:
      return {
        username: state.username,
        gender: state.gender,
        age: action.age
      }
    default:
      return initialState
  }
}

function App() {
  const [user, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <h1>Lift up / Pass down state</h1>

      <MyContext.Provider value={{ user, dispatch }}>
        <UserList />
        {user.username && <AddGenderToUser />}
        {user.gender && <AddAgeToUser />}

        {user.age && (
          <p>
            Hello {user.username}, Gender: {user.gender}, Age: {user.age}
          </p>
        )}
      </MyContext.Provider>
    </div>
  )
}

function UserList() {
  const { dispatch } = useContext(MyContext)
  return (
    <ul>
      <li>
        <span>Vimalraj Selvam</span>
        <button
          type="button"
          onClick={() => dispatch({ type: UPDATE_USER, username: 'Vimalraj' })}
        >
          Edit
        </button>
      </li>

      <li>
        <span>Bhuvaneswari Vimalraj</span>
        <button
          type="button"
          onClick={() =>
            dispatch({ type: UPDATE_USER, username: 'Bhuvaneswari' })
          }
        >
          Edit
        </button>
      </li>
      <li>Email</li>
    </ul>
  )
}

function AddGenderToUser() {
  const { user, dispatch } = useContext(MyContext)

  return (
    <div>
      <h2>Add gender to {user.username}</h2>
      <button
        type="button"
        onClick={() => dispatch({ type: SET_GENDER, gender: "M" })}
      >
        Add Age
      </button>
      <p>alert text</p>
    </div>
  )
}

function AddAgeToUser() {
  const { user, dispatch } = useContext(MyContext)
  return (
    <div>
      <h2>Add Age to {user.username}</h2>
      <button
        type="button"
        onClick={() => dispatch({ type: SET_AGE, age: 33 })}
      >
        Submit
      </button>
      <button>save</button>
    </div>
  )
}


export default function Home3() {
    return (
    <>
    <h2>Home3</h2>
    <App /> 
    </>
    )
  }

 