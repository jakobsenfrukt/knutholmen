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
      validation: Rule => Rule.required(),
      description: 'Slutten på URLen til denne siden. Klikk på Generate-knappen etter at tittel er skrevet inn for å lage en slug.'
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
