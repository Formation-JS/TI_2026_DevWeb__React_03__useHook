import { useId, useState } from 'react';

export default function DemoForm_Control() {

  // Identifiant pour l'accessibilité du formulaire
  const id = useId();

  // State pour le formulaire
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [nb, setNb] = useState('0');
  const [nav, setNav] = useState('ie');
  const [lib, setLib] = useState('react');
  const [isDist, setDist] = useState(false);

  // Méthode d'action du formulaire
  // - Submit
  const handleSubmit = (event: React.SubmitEvent) => {
    // Deactive le comportement par default du submit
    event.preventDefault();

    // Traitement
    const data = { name, desc, nb, nav, lib, isDist };
    console.log(data);
  };
  // - Reset
  const handleReset = () => {
    setName('');
    setDesc('');
    setNb('0');
    setNav('ie');
    setLib('react');
    setDist(false);
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <div>
        <label htmlFor={id + 'name'}>Un nom : </label>
        <input id={id + 'name'} type="text"
          value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor={id + 'desc'}>Une description : </label>
        <textarea id={id + 'desc'}
          value={desc} onChange={(e) => setDesc(e.target.value)} />
      </div>
      <div>
        <label htmlFor={id + 'nb'}>Un nombre : </label>
        <input id={id + 'nb'} type="number"
          value={nb} onChange={(e) => setNb(e.target.value)} />
      </div>
      <div>
        <label htmlFor={id + 'nav'}>Navigateur : </label>
        <select id={id + 'nav'} value={nav} onChange={(e) => setNav(e.target.value)}>
          <option value="ie">Internet Explorer</option>
          <option value="waterfox">Waterfox</option>
          <option value="vivaldi">Vivaldi</option>
          <option value="safari">Safari</option>
        </select>
      </div>
      <div>
        <label htmlFor={id + 'lib-js'}>Framework ou librairie JS : </label>
        <div id={id + 'lib-js'}>
          <input id={id + 'lib-js_react'} type="radio"
            checked={lib === 'react'} onChange={() => setLib('react')} />
          <label htmlFor={id + 'lib-js_react'}>React</label>
          <input id={id + 'lib-js_angular'} type="radio"
            checked={lib === 'angular'} onChange={() => setLib('angular')} />
          <label htmlFor={id + 'lib-js_angular'}>Angular</label>
          <input id={id + 'lib-js_svelte'} type="radio"
            checked={lib === 'svelte'} onChange={() => setLib('svelte')} />
          <label htmlFor={id + 'lib-js_svelte'}>Svelte</label>
        </div>
      </div>
      <div>
        <label htmlFor={id + 'dis'}>Télétravail : </label>
        <input id={id + 'dis'} type="checkbox"
          checked={isDist} onChange={(e) => setDist(e.target.checked)} />
      </div>
      <div>
        <button type="submit">Valider</button>
        <button type="reset">Effacer</button>
      </div>
    </form>
  );
}