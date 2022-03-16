export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  //__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'email',
      type: 'string',
      title: 'E-mail'
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone'
    },
    {
      name: 'facebook',
      type: 'string',
      title: 'Facebook'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'simpleBody'
    }
  ]
}
