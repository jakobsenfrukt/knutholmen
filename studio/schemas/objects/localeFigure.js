export default {
  name: 'localeFigure',
  type: 'image',
  title: 'Bilde',
  options: {
    hotspot: true
  },
  fields: [
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
      title: 'alt.en'
    }
  }
}
