export default {
  name: 'restaurantPage',
  type: 'document',
  title: 'Restaurant',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'pageHeader',
      type: 'pageHeader',
      title: 'Intro'
    },
    {
      name: 'tempbody',
      type: 'localeBody',
      title: 'Innhold (MIDLERTIDIG)'
    },
    {
      name: 'pageContent',
      type: 'pageContent',
      title: 'Innhold'
    }
  ]
}
