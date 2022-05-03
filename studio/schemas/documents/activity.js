export default {
  name: 'activity',
  type: 'document',
  title: 'Aktivitet',
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
      media: 'image.image'
    }
  }
}
