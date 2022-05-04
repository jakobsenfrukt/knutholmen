export default {
  name: 'basicFigure',
  type: 'image',
  title: 'Bilde',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternativ tekst',
      description: 'Viktig for SEO og tilgjengelighet. Beskriv kort hva man ser i bildet for en som er blind.',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Bildetekst',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt'
    }
  }
}
