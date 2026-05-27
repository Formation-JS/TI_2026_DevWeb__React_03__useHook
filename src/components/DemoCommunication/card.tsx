export function Card(
  {style ,title,content} : 
  {style? : string,
    title: string,
    content : string
  }
){


  return(
    <div style={{color:style}}>
      <h2>{title}</h2>

      <p>{content}</p>
      <button>Details</button>

    </div>
  )
}