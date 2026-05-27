import { useState } from 'react';
import ComponentA from './ComponentA.tsx';
import ComponentB from './ComponentB.tsx';
import ComponentC from './ComponentC.tsx';
import ComponentD from './ComponentD.tsx';

export default function Container(){
  // Les données du parent pourront être distribué parmis les enfants
  const [value,setValue] = useState<string>('test')
  const [data , setData] = useState<string[]>(["hello"])

  // Les methodes aussi pourront être accessible dans les composant enfants
  const addItem = (item : string) => {
    setData([...data,item])
  }

  const removeItem = (index : number) => {
    setData(data.filter((_,i) => i !== index))
  }

  const updateItem = (index : number,newValue : string) : void =>  {
        setData(data.map((item,i) =>  i == index ? newValue : item))
  }

  return (
  <>

<div>
  <p>Dans un premier temps on récupère et affiche les informations dans le même composant</p>
</div>
    {/* ============================ Etape 1 ======================== */}
    {/* Récupération et affichage d'une valeur dans le composant container */}
      <h1>Container</h1>
      {value}
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>


<div>
  <p> Pour décomposer les besoin et facilité l'utilisation et la maintenance</p>
  <p>Il est possible de délégué une partie de la logique à un composant enfant</p>
  <ul>
    <li>un composant pour afficher</li>
    <li>un composant pour récupérer une information de la remonter vers le parent</li>
    <li>En typescript les paramètres devront être typé : {`{message } : {message :string }`} </li>
    <li>Les paramètres peuvent être facultatif : {`{name = "test"} : {name?: string }`}</li>
  </ul>
</div>
    {/* ============================ Etape 2 ======================== */}
    {/* Ici le composant enfant reçoit une information du parent */}
    {/* message : string */}
    {/* data : string[] */}
      <div className='card'>
        <ComponentA message={value}/>
      </div>

    {/* Ici l'enfant déclenche la methode du parent "SetValue" */}
    {/* setValue : React.Dispatch<React.SetStateAction<string>> */}
      <div className='card'>
        <ComponentB setValueFromChild={setValue}/>
      </div>



    {/* ============================ Etape 3 ======================== */}
    {/* 
    La logique est dans le composant parent 
    - Liste 
    - addToList
    <

    Donne accès à la liste au composant C
    Permet au composant D d'ajouter un element à la liste ( en passant par le useState du parent)
    */}
    <div>
      <p>La logique se trouve dans le container : la liste , les methodes , et affiche le tout</p>
      <p>Un composant avec un role limité : récupération d'information</p>
      <p>Un dernier composant qui se contente d'afficher la liste </p>
    </div>

    {/* Le composant C reçoit la liste depuis le parent */}
    {/* Le composant C reçoit également l'accès à la methode de suppression d'un élément par son index */}
    <div className='card'>
      <ComponentC data={data} removeItemChild={removeItem} updateItemChild={updateItem}/>
    </div>


    {/* 
      Le composant D à accès à la methode du parent 
      Ce qui permet de déclencher la methode addItem
    */}
    <div className='card'>
      <ComponentD addFromChild={addItem}/>
    </div>

  </>
  )
}