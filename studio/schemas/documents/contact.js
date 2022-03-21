export default {
  name: 'contact',
  type: 'document',
  title: 'Kontakt',
  //__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'email',
      type: 'string',
      title: 'E-post'
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Telefon'
    },
    {
      name: 'facebook',
      type: 'string',
      title: 'Facebook'
    },
    {
      name: 'address',
      type: 'simpleBody',
      title: 'Adresse'
    }
  ]
}
