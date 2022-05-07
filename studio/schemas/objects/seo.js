export default {
  name: 'seo',
  type: 'object',
  title: 'Deling & SEO',
  fields: [
    {
      name: 'ogimg',
      type: 'image',
      title: 'Bilde til sosiale medier',
      description: 'Dukker opp når nettsiden deles på sosiale medier om ikke annet bilde er tilgjengelig.',
      validation: Rule => Rule.error('Mangler bilde til sosiale medier!').required(),
    },
    {
      name: 'description',
      type: 'localeText',
      title: 'Beskrivelse',
      description: 'Kort beskrivelse av nettsiden for søkemotorer og sosiale medier.'
    }
  ]
}
