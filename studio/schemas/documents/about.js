export default {
  name: 'about',
  type: 'document',
  title: 'Om oss',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'pageHeader',
      type: 'pageHeader',
      title: 'Intro'
    },
    {
      name: 'pageContent',
      type: 'pageContent',
      title: 'Innhold'
    }
  ]
}
