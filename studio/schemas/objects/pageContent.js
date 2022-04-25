export default {
  name: 'pageContent',
  type: 'object',
  title: 'Innhold',
  fields: [
    {
      name: 'blocks',
      type: 'array',
      title: 'Innholdsblokker',
      of: [
        {
          type: 'localeBody',
          title: 'Brødtekst'
        },
        {
          type: 'localeFigureCaptioned',
          title: 'Bilde med bildetekst'
        },
        {
          type: 'localeFigure',
          title: 'Bilde uten bildetekst'
        }
      ]
    }
  ]
}
