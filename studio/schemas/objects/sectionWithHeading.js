export default {
  name: 'sectionWithHeading',
  type: 'object',
  title: 'Seksjon med overskrift',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Tittel'
    },
    {
      name: 'heading',
      type: 'localeString',
      title: 'Overskrift'
    },
    {
      name: 'text',
      type: 'localeSimpleBody',
      title: 'Tekst'
    },
    {
      name: 'image',
      type: 'localeFigureCaptioned',
      title: 'Bilde'
    }
  ],
  preview: {
    select: {
      title: 'heading.no',
      media: 'image.image',
    },
  },
}
