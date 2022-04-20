export default {
  name: 'roomPage',
  type: 'document',
  title: 'Overnatting',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
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
      name: 'bookingUrl',
      type: 'localeString',
      title: 'Booking-URL',
      description: 'Hele URLen til booking av rom. Husk å inkludere https:// etc.',
      validation: Rule => Rule.required()
    },
    {
      name: 'lead',
      type: 'localeText',
      title: 'Ingress'
    }
  ]
}
