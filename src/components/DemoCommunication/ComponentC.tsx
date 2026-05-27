export default function ComponentC({data,removeItemChild} : 
  {data : string[],removeItemChild : (index : number) => void}){

const removeFromChild = (index : number) => {
  removeItemChild(index)
}

  return (
    <>
<ul>
  {data.map( (value,index) => (
    <>
      <li key={index}>{value}</li>
      <button onClick={() => removeFromChild(index)}>x</button>
    </>
    ))}
</ul>
    </>
  )
}