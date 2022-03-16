export default {
  name: 'room',
  type: 'document',
  title: 'Room',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title'
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
      title: 'Main image'
    },
    {
      name: 'lead',
      type: 'localeText',
      title: 'Intro'
    },
    {
      name: 'body',
      type: 'localeBody',
      title: 'Content'
    }
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'image'
    }
  }
}
