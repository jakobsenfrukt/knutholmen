export default {
  name: 'figure',
  type: 'object',
  title: 'Bilde med alternativ tekst',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Bilde',
      options: {
        hotspot: true
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternativ tekst',
      description: 'Viktig for SEO og tilgjengelighet. Beskriv kort hva man ser i bildet for en som er blind.',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'image.asset.url',
      title: 'alt'
    }
  }
}
