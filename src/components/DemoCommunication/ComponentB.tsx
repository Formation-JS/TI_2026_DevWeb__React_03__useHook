import { useState } from 'react';


export default function ComponentB(
  {setValueFromChild} : {setValueFromChild : React.Dispatch<React.SetStateAction<string>>}
){

  const [valueB , setValueB] = useState<string>('')

  const submitValue = () => {
    // appel du params du parent
    setValueFromChild(valueB)
    setValueB('')
  }

  return (
    <>
    <h2>Composant B</h2>
    <input type="text" value={valueB}  onChange={(e) => setValueB(e.target.value)}/>
    <button onClick={submitValue}>Submit</button>
    </>
  )
}