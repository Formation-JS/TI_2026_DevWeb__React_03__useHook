import { useCallback, useState } from 'react';

type DemoStateProps = {
  name?: string;
};
export default function DemoState({ name = 'Della' }: DemoStateProps) {

  // ↓ Créer un "container" avec un valeur d'état
  //   Si la valeur change, cela provoque un re-render !
  //   Le "useState" renvoi : La valeur actuelle et la fct modificateur
  const [msg, setMsg] = useState<string | null>('');

  const handleSleep = () => {
    // Utilisation de la méthode "set..." pour faire évoluer une valeur
    // TOUJOURS utiliser avec un callback
    console.log('[Avant]', msg);
    setMsg(currentMsg => currentMsg + 'Zzz ');
    console.log('[Après]', msg);
  };

  const handleWakeUp = () => {
    // Utilisation de la méthode "set..." pour définir une valeur fixe
    setMsg('');
    setMsg(_msg => '');
  };

  return (
    <>
      <p>{name} : {msg}</p>
      <div>
        <button onClick={handleSleep}>Dormir</button>
        <button onClick={handleWakeUp}>Reveil</button>
      </div>
    </>
  );
}