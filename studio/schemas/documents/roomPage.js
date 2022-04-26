export default {
  name: 'roomPage',
  type: 'document',
  title: 'Overnatting',
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
    }
  ]
}
