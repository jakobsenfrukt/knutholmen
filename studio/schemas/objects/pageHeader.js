export default {
  name: 'pageHeader',
  type: 'object',
  title: 'Toppseksjon',
  fields: [
    {
      name: 'heading',
      type: 'localeString',
      title: 'Overskrift'
    },
    {
      name: 'text',
      type: 'localeText',
      title: 'Tekst'
    },
    {
      name: 'image',
      type: 'localeFigure',
      title: 'Bilde'
    }
  ]
}
