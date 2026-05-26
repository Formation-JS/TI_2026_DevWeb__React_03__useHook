import { useId } from 'react';

export default function DemoForm_Action() {

  // Identifiant pour l'accessibilité du formulaire
  const id = useId();


  const handleSubmitAction = (formData : FormData) => {

    // Données du FormData
    console.log('FormData', formData);
    
    // Conversion du FormData en ObjectJS
    // v1) via "fromEntries"
    const data1 = Object.fromEntries(formData.entries());
    console.log('data v1', data1);

    // v2) à la mano
    const data2 = {
      name: formData.get('name')?.toString(),
      desc: formData.get('desc')?.toString(),
      nb: parseFloat(formData.get('nb')?.toString() ?? ''),
      nav: formData.get('nav')?.toString(),
      lib: formData.get('lib')?.toString(),
      dist: formData.has('dist'),
    }
    console.log('data v2', data2);

    // v3) Via un lib de validation (Exemple: Zod)
    //     → Il sera en demo dans le composant "DemoForm_ActionState" :o
  }

  return (
    <form action={handleSubmitAction}>
      <div>
        <label htmlFor={id + 'name'}>Un nom : </label>
        <input id={id + 'name'} type="text" name='name'/>
      </div>
      <div>
        <label htmlFor={id + 'desc'}>Une description : </label>
        <textarea id={id + 'desc'} name='desc'/>
      </div>
      <div>
        <label htmlFor={id + 'nb'}>Un nombre : </label>
        <input id={id + 'nb'} type="number" name='nb'/>
      </div>
      <div>
        <label htmlFor={id + 'nav'}>Navigateur : </label>
        <select id={id + 'nav'} name='nav'>
          <option value="waterfox">Waterfox</option>
          <option value="internet">Internet Explorer</option>
          <option value="vivaldi">Vivaldi</option>
          <option value="safari">Safari</option>
        </select>
      </div>
      <div>
        <label htmlFor={id + 'lib-js'}>Framework ou librairie JS : </label>
        <div id={id + 'lib-js'}>
          <input id={id + 'lib-js_react'} type="radio" name='lib' value='react' />
          <label htmlFor={id + 'lib-js_react'}>React</label>
          <input id={id + 'lib-js_angular'} type="radio" name='lib' value='angular' />
          <label htmlFor={id + 'lib-js_angular'}>Angular</label>
          <input id={id + 'lib-js_svelte'} type="radio" name='lib' value='svelte' />
          <label htmlFor={id + 'lib-js_svelte'}>Svelte</label>
        </div>
      </div>
      <div>
        <label htmlFor={id + 'dis'}>Télétravail : </label>
        <input id={id + 'dis'} type="checkbox" name='isDist' />
      </div>
      <div>
        <button type="submit">Valider</button>
        <button type="reset">Effacer</button>
      </div>
    </form>
  );
}