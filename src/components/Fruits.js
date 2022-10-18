import { useState } from "react";
function Fruits() {


  const fruits = ['apple', 'mango', 'banana']
  const colors = ['red', 'white', 'black', 'blue', 'pink']

  const [fruitsState, setFruitsState] = useState(fruits)
  const [colorsState, setColorsState] = useState(['red', 'red', 'red'])

  const handleDelete = (idx) => {

    const oldFruitsState = [...fruitsState]
    oldFruitsState.splice(idx, 1)

    setFruitsState(oldFruitsState)
  }

  const handleClick = (idx) => {
    const oldColorsState = [...colors]
    oldColorsState[idx] = colors[Math.floor(Math.random() * colors.length)]

    setColorsState(oldColorsState)


  }

  return (
    <div>
      {
        fruits.map((item, idx) => <div key={idx}>{item} color={colorsState[idx]}
          <button onClick={() => handleClick(idx)} >Change color</button>
          <button onClick={() => handleDelete(idx)} >Delete me</button>
        </div>)
      }
    </div>
  );
}

export default Fruits;