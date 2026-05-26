import './App.css';
import DemoForm_Action from './components/DemoForm/DemoForm_Action.tsx';
import DemoForm_ActionState from './components/DemoForm/DemoForm_ActionState.tsx';
import DemoForm_Control from './components/DemoForm/DemoForm_Control.tsx';
import DemoState from './components/DemoState/DemoState.tsx';

function App() {

  return (
    <>
      <h1>Demo 03</h1>
      <h2>State</h2>
      <DemoState />
      <hr />
      {/* <h2>Formulaire - Composant controlé</h2>
      <DemoForm_Control /> */}
      {/* <h2>Formulaire - Action</h2>
      <DemoForm_Action /> */}
      <h2>Formulaire - ActionState</h2>
      <DemoForm_ActionState />
    </>
  );
}

export default App;
