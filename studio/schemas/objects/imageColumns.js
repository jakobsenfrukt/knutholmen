export default {
  name: 'imageColumns',
  type: 'object',
  title: 'Bilder i kolonner',
  fields: [
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        {
          name: 'localeFigureCaptioned',
          type: 'localeFigureCaptioned',
          title: 'Bilde'
        },
      ]
    },
  ],
  preview: {
    select: {
      title: 'images[0].alt.no',
      media: 'images[0].image',
    },
  },
}
