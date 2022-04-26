export default {
  name: 'activityPage',
  type: 'document',
  title: 'Aktiviteter',
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
