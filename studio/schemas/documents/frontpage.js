export default {
  name: 'frontpage',
  type: 'document',
  title: 'Forside',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Tittel'
    },
    {
      name: 'text',
      type: 'localeText',
      title: 'Intro'
    },
    {
      name: 'image',
      type: 'localeFigure',
      title: 'Toppbilde / illustrasjon'
    },
    {
      name: 'image2',
      type: 'localeFigure',
      title: 'Bilde',
      description: 'Foto i fullbredde under bestillingslenke'
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
      ]
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
      ]
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
      ]
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
      ]
    },
  ]
}
