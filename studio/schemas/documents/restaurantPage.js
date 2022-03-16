export default {
  name: 'restaurantPage',
  type: 'document',
  title: 'Restaurant',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title'
    }
  ]
}
