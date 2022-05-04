export default {
  name: 'frontpage',
  type: 'document',
  title: 'Forside',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  groups: [
    {
      name: 'content',
      title: 'Tekst og bilder',
    },
    {
      name: 'selected',
      title: 'Utvalgt innhold',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Tittel',
      group: 'content'
    },
    {
      name: 'text',
      type: 'localeText',
      title: 'Intro',
      group: 'content'
    },
    {
      name: 'image',
      type: 'localeFigure',
      title: 'Toppbilde / illustrasjon',
      group: 'content'
    },
    {
      name: 'image2',
      type: 'localeFigure',
      title: 'Bilde',
      description: 'Foto i fullbredde under bestillingslenke',
      group: 'content'
    },
    {
      title: 'Utvalgte pakker',
      name: 'selectedOffers',
      type: 'array',
      of: [
        {
          title: 'Pakke',
          type: 'reference',
          to: [
            {
              type: 'offer'
            }
          ]
        }
      ],
      group: 'selected'
    },
    {
      title: 'Utvalgte romtyper',
      name: 'selectedRooms',
      type: 'array',
      of: [
        {
          title: 'Rom',
          type: 'reference',
          to: [
            {
              type: 'room'
            }
          ]
        }
      ],
      group: 'selected'
    },
    {
      title: 'Utvalgte aktiviteter',
      name: 'selectedActivities',
      type: 'array',
      of: [
        {
          title: 'Aktivitet',
          type: 'reference',
          to: [
            {
              type: 'activity'
            }
          ]
        }
      ],
      group: 'selected'
    },
    {
      title: 'Bilder til restaurantseksjon',
      name: 'restaurantImages',
      type: 'array',
      of: [
        {
          name: 'localeFigure',
          type: 'localeFigure',
          title: 'Bilde'
        },
      ],
      group: 'selected'
    },
  ]
}
