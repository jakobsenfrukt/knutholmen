export default {
  name: 'about',
  type: 'document',
  title: 'Om oss',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Tittel'
    },
    {
      name: 'pageHeader',
      type: 'pageHeader'
    },
  ]
}
