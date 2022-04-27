export default {
  name: 'textAndImage',
  type: 'object',
  title: 'Tekst + bilde',
  fields: [
    {
      name: 'text',
      type: 'localeBody',
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
      title: 'text.no',
      media: 'image.image',
    },
  },
}
