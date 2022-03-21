export default {
  name: 'article',
  type: 'document',
  title: 'Artikkel',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tittel'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Language',
      name: 'locale',
      type: 'string',
      options: {
        list: [
          {title: 'Norsk', value: 'no'},
          {title: 'Engelsk', value: 'en'}
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    },
    {
      name: 'publishedAt',
      title: 'Publiseringsdato',
      type: 'datetime',
    },
    {
      name: 'mainImages',
      title: 'Hovedbilde',
      type: 'figure',
    },
    {
      name: 'lead',
      type: 'text',
      title: 'Ingress'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}
