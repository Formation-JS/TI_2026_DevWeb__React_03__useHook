import { useEffect, useState } from 'react';

export default function ComponentUpdate(
 {
  // Valeur à modifier
  messageToUpdate,
  // methode pour executer la modification
  updateValueChild,
  // l'index de l'élément à modifier
  index,
  // Modification de toShow
  setToShow
} : 
 {
  messageToUpdate : string,
  updateValueChild : (index : number,newValue : string) => void,
  index : number,
  setToShow : React.Dispatch<React.SetStateAction<number>>
 }
){
// Permet de récupérer la nouvelle valeur de l'utilisateur
  const [valueToUpdate , setValueToUpdate] = useState<string>(messageToUpdate)


// Déclenche la mise à jour
const updateValue = () => {
  updateValueChild(index,valueToUpdate)
  setToShow(-1)
}

  return (
    <>
      <input type='text' value={valueToUpdate} onChange={(e) => setValueToUpdate(e.target.value)} />
      <button onClick={updateValue}>update</button>
    </>
  )
}