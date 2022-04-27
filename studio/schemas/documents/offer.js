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
      name: 'heading',
      type: 'localeString',
      title: 'Overskrift'
    },
    {
      name: 'url',
      type: 'localeString',
      title: 'URL til bestilling',
      description: 'Husk å inkludere hele URLen, inkludert https:// etc.'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'localeSlug',
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
