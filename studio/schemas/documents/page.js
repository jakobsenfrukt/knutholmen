export default {
  name: 'page',
  type: 'document',
  title: 'Side',
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
      name: 'heading',
      type: 'localeString',
      title: 'Overskrift'
    },
    {
      name: 'pageContent',
      type: 'pageContent',
      title: 'Innhold'
    }
  ],
  preview: {
    select: {
      title: 'title.no'
    }
  }
}
