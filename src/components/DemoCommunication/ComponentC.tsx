import { useState } from 'react';
import ComponentUpdate from './componentUpdate.tsx';


export default function ComponentC({data,removeItemChild,updateItemChild} : 
  { data : string[],
    removeItemChild : (index : number) => void,
    updateItemChild : (index : number , newValue : string) => void
  }
  ){

    const [toShow , setToShow] = useState<number>(-1)

const removeFromChild = (index : number) => {
  removeItemChild(index)
}

  return (
    <>
<ul>
  {data.map( (value,index) => (
    <div key={index}>

      { toShow !== index ? 
      <>
        <li>{value} - {index}</li>
        <button onClick={() => removeFromChild(index)}>x</button>
        <button onClick={() => setToShow(index)}>Update</button>
      </> 
      : 
        <ComponentUpdate 
        messageToUpdate={value} 
        index={index} 
        updateValueChild={updateItemChild}
        setToShow={setToShow}
        />
      }


    </div>
    ))}
</ul>
    </>
  )
}