export default {
  name: 'roomPage',
  type: 'document',
  title: 'Rooms',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title'
    }
  ]
}
