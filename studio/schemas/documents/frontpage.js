export default {
  name: 'frontpage',
  type: 'document',
  title: 'Forside',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'text',
      type: 'localeText',
      title: 'Intro'
    },
    {
      name: 'image',
      type: 'localeFigure',
      title: 'Bilde'
    }
  ]
}
