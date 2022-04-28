export default {
  name: 'guestinfo',
  type: 'document',
  title: 'Info til gjester',
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
