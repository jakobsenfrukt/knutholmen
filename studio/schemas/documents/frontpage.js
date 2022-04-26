export default {
  name: 'frontpage',
  type: 'document',
  title: 'Forside',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Tittel'
    },
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
