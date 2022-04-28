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
      type: 'localeSlug',
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
      name: 'pageContent',
      type: 'pageContent',
      title: 'Innhold'
    },
  ],
  preview: {
    select: {
      title: 'title.no',
      media: 'image.image'
    }
  }
}
