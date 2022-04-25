export default {
  name: 'articlePage',
  type: 'document',
  title: 'Aktuelt',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'pageHeader',
      type: 'pageHeader',
      title: 'Intro'
    }
  ]
}
