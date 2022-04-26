export default {
  name: 'booking',
  type: 'object',
  title: 'Booking',
  fields: [
    {
      name: 'buttonText',
      type: 'localeString',
      title: 'Knappetekst'
    },
    {
      name: 'url',
      type: 'localeString',
      title: 'URL',
      description: 'Husk å inkludere hele URLen, inkludert https:// etc.'
    },
    {
      name: 'info',
      type: 'localeString',
      title: 'Infotekst'
    }
  ]
}
