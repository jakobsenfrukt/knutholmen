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
      validation: Rule => Rule.required(),
      description: 'Slutten på URLen til denne siden. Klikk på Generate-knappen etter at tittel er skrevet inn for å lage en slug.'
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
      name: 'image',
      title: 'Bilde',
      type: 'figure',
    },
    {
      name: 'lead',
      type: 'text',
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
      title: 'title',
      media: 'image.image'
    }
  }
}
