import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 5
  const [count, setCount] = useState(0)

  const addValue = () => {
    //  setCount(count + 1)

    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    // note :- it will still increment only by One ( react fibre send it in batches and then it will that all state are working same so only one will work )

    // but if we want it should update all times (setter method)
    setCount(prevcount => prevcount + 1)
    setCount(prevcount => prevcount + 1)
    setCount(prevcount => prevcount + 1)


  }

  const decreaseValue = () => {
    setCount(count - 1)


  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App





