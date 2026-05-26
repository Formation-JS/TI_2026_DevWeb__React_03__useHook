type DemoStateProps = {
  name?: string
}
export default function DemoState({ name = 'Della'} : DemoStateProps) {

  return (
    <>
      <p>{name} : ..........</p>
      <div>
        <button>Dormir</button>
        <button>Reveil</button>
      </div>
    </>
  );
}