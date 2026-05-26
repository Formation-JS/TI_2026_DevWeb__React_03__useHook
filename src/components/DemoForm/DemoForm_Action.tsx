import { useId } from 'react';

export default function DemoForm_Action() {

  const id = useId();

  return (
    <form>
      <div>
        <label htmlFor={id + 'name'}>Un nom : </label>
        <input id={id + 'name'} type="text" />
      </div>
      <div>
        <label htmlFor={id + 'desc'}>Une description : </label>
        <textarea id={id + 'desc'} />
      </div>
      <div>
        <label htmlFor={id + 'nb'}>Un nombre : </label>
        <input id={id + 'nb'} type="number" />
      </div>
      <div>
        <label htmlFor={id + 'nav'}>Navigateur : </label>
        <select id={id + 'nav'}>
          <option value="">Waterfox</option>
          <option value="">Internet Explorer</option>
          <option value="">Vivaldi</option>
          <option value="">Safari</option>
        </select>
      </div>
      <div>
        <label htmlFor={id + 'lib-js'}>Framework ou librairie JS : </label>
        <div id={id + 'lib-js'}>
          <input id={id + 'lib-js_react'} type="radio" />
          <label htmlFor={id + 'lib-js_react'}>React</label>
          <input id={id + 'lib-js_angular'} type="radio" />
          <label htmlFor={id + 'lib-js_angular'}>Angular</label>
          <input id={id + 'lib-js_svelte'} type="radio" />
          <label htmlFor={id + 'lib-js_svelte'}>Svelte</label>
        </div>
      </div>
      <div>
        <label htmlFor={id + 'dis'}>Télétravail : </label>
        <input id={id + 'dis'} type="checkbox" />
      </div>
    </form>
  );
}