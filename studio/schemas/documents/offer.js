export default {
  name: 'offer',
  type: 'document',
  title: 'Pakke',
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
      title: 'Bilde'
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
    }
  ],
  preview: {
    select: {
      title: 'title.no',
      media: 'image'
    }
  }
}
