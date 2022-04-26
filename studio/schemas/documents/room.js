export default {
  name: 'room',
  type: 'document',
  title: 'Rom',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Tittel'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      type: 'localeFigure',
      title: 'Hovedbilde'
    },
    {
      name: 'lead',
      type: 'localeText',
      title: 'Ingress'
    },
    {
      name: 'body',
      type: 'localeBody',
      title: 'Innhold'
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Bildegalleri',
      of: [
        {
          type: 'localeFigure',
          title: 'Bilde uten bildetekst'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title.no',
      media: 'image'
    }
  }
}
