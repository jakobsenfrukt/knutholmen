export default {
  name: 'localeFigureCaptioned',
  type: 'image',
  title: 'Bilde med bildetekst',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'caption',
      type: 'localeString',
      title: 'Bildetekst',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'localeString',
      title: 'Alternativ tekst',
      description: 'Viktig for SEO og tilgjengelighet. Beskriv kort hva man ser i bildet for en som er blind.',
      options: {
        isHighlighted: true
      },
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
