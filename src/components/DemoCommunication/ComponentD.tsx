import { useState } from 'react';

export default function ComponentD(
  {addFromChild} : { addFromChild : (item : string) => void}
){

  const [valueToSend , setValueToSend] = useState<string>('')

  const addToList = () => {
    addFromChild(valueToSend)
    setValueToSend('')
  }

  return (
    <>
      <input type='text' value={valueToSend} onChange={(e) => setValueToSend(e.target.value)}/>
      <button onClick={addToList}>Add</button>
    </>
  )
}