import z from 'zod';

export const exampleSchema = z.object({

  name: z
    .string()
    .min(2, { error: 'La chaîne doit faire minimum 2 caracteres' })
    .max(50, { error: 'La chaîne doit faire maximum 50 caracteres' })
    .trim(),

  desc: z
    .string()
    .max(5_000, { error: 'La chaîne doit faire maximum 5000 caracteres' })
    .trim()
    .transform(val => val !== '' ? val : null)
    .nullable(),

  nb: z
    .coerce
    .number({ error: 'La valeur doit être un nombre valide'})
    .nonnegative({ error: 'La valeur ne doit pas être negative'}),

  nav: z
    .enum(['waterfox', 'internet', 'vivaldi', 'safari'], { error : 'Veuillez selectionnez une des valeurs suivants : "waterfox", "internet", "vivaldi", "safari"'}),
  
  lib: z
    .enum(['react', 'angular', 'svelte'], {error : 'Veuillez selectionner une option valide'}),

  dist: z
    .transform(val => val === 'on')
});
