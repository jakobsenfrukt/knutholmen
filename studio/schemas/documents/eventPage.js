export default {
  name: 'eventPage',
  type: 'document',
  title: 'Konferanse & selskap',
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
