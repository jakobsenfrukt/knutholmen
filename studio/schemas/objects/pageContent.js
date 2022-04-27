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
          name: 'localeBody',
          type: 'localeBody',
          title: 'Tekstblokk'
        },
        {
          name: 'textAndImage',
          type: 'textAndImage',
          title: 'Tekst + bilde'
        },
        {
          name: 'localeFigureCaptioned',
          type: 'localeFigureCaptioned',
          title: 'Bilde (fullbredde)'
        },
        {
          name: 'imageColumns',
          type: 'imageColumns',
          title: 'Bilder i kolonner'
        },
        {
          name: 'sectionWithHeading',
          type: 'sectionWithHeading',
          title: 'Seksjon med overskrift'
        },
      ]
    }
  ]
}
