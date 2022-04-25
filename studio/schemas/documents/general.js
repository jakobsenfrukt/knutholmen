export default {
  name: 'general',
  type: 'document',
  title: 'Generelt',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'bookingUrl',
      type: 'localeString',
      title: 'Booking-URL for overnatting',
      description: 'Hele URLen til booking av rom. Husk å inkludere https:// etc.',
      validation: Rule => Rule.required()
    },
    {
      name: 'activityUrl',
      type: 'localeString',
      title: 'URL til aktivitetskalender',
      description: 'Hele URLen til aktivitetskalender. Husk å inkludere https:// etc.',
      validation: Rule => Rule.required()
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'Deling & SEO'
    }
  ]
}
