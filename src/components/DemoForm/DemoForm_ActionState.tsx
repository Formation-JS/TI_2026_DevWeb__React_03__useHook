import { useId } from 'react';
import { exampleSchema } from '../../validators/example.validator.ts';

export default function s() {

  // Identifiant pour l'accessibilité du formulaire
  const id = useId();


  const handleSubmitAction = (formData : FormData) => {
    
    // Données du FormData
    console.log('FormData', formData);
    
    // Validation des données avec Zod
    const { data, success, error } = exampleSchema.safeParse(Object.fromEntries(formData))

    console.log('data', data);
    console.log('success', success);
    console.log('error', error);
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
        <input id={id + 'dis'} type="checkbox" name='dist' />
      </div>
      <div>
        <button type="submit">Valider</button>
        <button type="reset">Effacer</button>
      </div>
    </form>
  );
}