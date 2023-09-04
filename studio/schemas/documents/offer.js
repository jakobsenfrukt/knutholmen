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
      name: 'url',
      type: 'localeString',
      title: 'URL til bestilling',
      validation: Rule => Rule.required(),
      description: 'Husk å inkludere hele URLen, inkludert https:// etc.'
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
