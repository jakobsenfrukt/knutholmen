export default {
  name: 'imageGallery',
  type: 'object',
  title: 'Bildegalleri',
  fields: [
    {
      title: 'Bildegalleri',
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