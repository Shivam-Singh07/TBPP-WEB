import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton(){

  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return(
    <button onClick={handleClick}>Clicked {count} times</button>
  )
}

<img className='avataer' />

const user ={
  name: 'Something Matter',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4F1TlDVxxDBHA6o9WzV-kOYFUfi1ies9_Q&s',
  imageSize: 190,
}

function App() {

  return (
    <>
   <h1>Hello</h1>
    <p>Hello there.<br />How do you do?</p>
    <MyButton />
    <MyButton/>

    <h1>{user.name}</h1>

    <img className='avatar' src={user.imageUrl} 
    style={{
      width: user.imageSize,
      height: user.imageSize}}/>
   </>
  )
}




export default App
