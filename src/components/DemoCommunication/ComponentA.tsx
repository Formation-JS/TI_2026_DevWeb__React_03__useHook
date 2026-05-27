
export default function ComponentA({message ,name = "test"} : {message :string,name?: string }){
  return (
    <>
      <h2>Composant A</h2>
      <p>Message : {message}</p>
      <p>Name : {name}</p>
    </>
  )
}