import { useActionState, useId } from 'react';
import { exampleSchema } from '../../validators/example.validator.ts';
import z from 'zod';

type ExampleFormState = {
  data: z.infer<typeof exampleSchema> | null,
  formData: FormData | null,
  error: any | null;
};

export default function DemoForm_ActionState() {

  // Identifiant pour l'accessibilité du formulaire
  const id = useId();

  // Définition du submit action avec state
  // - Doit être asynchrone
  // - Possede 2 parametre → State, FormData
  // - Retourne la nouvelle valeur du State
  const handleSubmitAction = async (_state: ExampleFormState, formData: FormData) : Promise<ExampleFormState> => {

    // Données du FormData
    console.log('FormData', formData);

    // Validation des données avec Zod
    const { data, success, error } = exampleSchema.safeParse(Object.fromEntries(formData));

    // Erreur de validation
    if (!success) {
      return {
        data: null,
        formData,
        error: z.flattenError(error) as any // Fuck it
      };
    }

    // Returne success 
    return {
      data,
      formData: null,
      error: null
    };
  };

  const [state, handleSubmit] = useActionState(handleSubmitAction, { data: null, error: null, formData: null });


  return (
    <form action={handleSubmit}>
      <div>
        <label htmlFor={id + 'name'}>Un nom : </label>
        <input id={id + 'name'} type="text" name='name' defaultValue={state.formData?.get('name')?.toString()} />
      </div>
      <div>
        <label htmlFor={id + 'desc'}>Une description : </label>
        <textarea id={id + 'desc'} name='desc' defaultValue={state.formData?.get('desc')?.toString()} />
      </div>
      <div>
        <label htmlFor={id + 'nb'}>Un nombre : </label>
        <input id={id + 'nb'} type="number" name='nb' defaultValue={state.formData?.get('nb')?.toString()} />
      </div>
      <div>
        <label htmlFor={id + 'nav'}>Navigateur : </label>
        <select id={id + 'nav'} name='nav' defaultValue={state.formData?.get('nav')?.toString()}>
          <option value="waterfox">Waterfox</option>
          <option value="internet">Internet Explorer</option>
          <option value="vivaldi">Vivaldi</option>
          <option value="safari">Safari</option>
        </select>
      </div>
      <div>
        <label htmlFor={id + 'lib-js'}>Framework ou librairie JS : </label>
        <div id={id + 'lib-js'}>
          <input id={id + 'lib-js_react'} type="radio" name='lib' value='react' defaultChecked={state.formData?.get('lib')?.toString() === 'react'} />
          <label htmlFor={id + 'lib-js_react'}>React</label>
          <input id={id + 'lib-js_angular'} type="radio" name='lib' value='angular' defaultChecked={state.formData?.get('lib')?.toString() === 'angular'} />
          <label htmlFor={id + 'lib-js_angular'}>Angular</label>
          <input id={id + 'lib-js_svelte'} type="radio" name='lib' value='svelte' defaultChecked={state.formData?.get('lib')?.toString() === 'svelte'} />
          <label htmlFor={id + 'lib-js_svelte'}>Svelte</label>
        </div>
      </div>
      <div>
        <label htmlFor={id + 'dis'}>Télétravail : </label>
        <input id={id + 'dis'} type="checkbox" name='dist' defaultChecked={state.formData?.has('dist')} />
      </div>
      <div>
        <button type="submit">Valider</button>
        <button type="reset">Effacer</button>
      </div>
    </form>
  );
}