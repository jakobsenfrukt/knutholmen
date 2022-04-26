export default {
  name: 'general',
  type: 'document',
  title: 'Generelt',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  groups: [
    {
      name: 'rooms',
      title: 'Overnatting',
    },
    {
      name: 'activities',
      title: 'Aktiviteter',
    },
    {
      name: 'restaurant',
      title: 'Restaurant',
    },
    {
      name: 'giftcard',
      title: 'Gavekort',
    },
    {
      name: 'seo',
      title: 'SEO',
    }
  ],
  fields: [
    {
      name: 'bookRoom',
      type: 'booking',
      title: 'Lenke til booking av rom',
      validation: Rule => Rule.required(),
      group: 'rooms'
    },
    {
      name: 'bookActivity',
      type: 'booking',
      title: 'Lenke til aktivitetskalender',
      validation: Rule => Rule.required(),
      group: 'activities'
    },
    {
      name: 'bookTable',
      type: 'booking',
      title: 'Lenke til bordreservasjon',
      validation: Rule => Rule.required(),
      group: 'restaurant'
    },
    {
      name: 'giftcard',
      type: 'booking',
      title: 'Lenke til kjøp av gavekort',
      validation: Rule => Rule.required(),
      group: 'giftcard'
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'Deling & SEO',
      group: 'seo'
    }
  ]
}
