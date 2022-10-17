import { useState } from 'react'
function Fruits(props) {

  const [colouring, setColouring] = useState(['Apple', 'Banana', 'Lemon', 'Mango'])

  function change() {

  }

  console.log(colouring);
  return (

    <div>
      {
        colouring.map((item, idx) => {

          <div key={idx}>{item[0]}</div>

        })
      }
      <button className='border-2 border-red-800 w-[125px] h-[45px]' onClick={change}>Change Color</button>
      <button className='border-2 border-red-800 w-[125px] h-[45px]' onClick={(e) => delete e.target.item}>Delete Me</button>
    </div>

  );
}

export default Fruits;