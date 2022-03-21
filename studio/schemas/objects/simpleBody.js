export default {
  name: 'simpleBody',
  type: 'array',
  title: 'Innhold',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [{title: 'Normal', value: 'normal'}],
      lists: [],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'}
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: Rule => Rule.uri({scheme: ['tel', 'mailto', 'http', 'https']})
              },
              {
                title: 'Åpne i ny fane',
                name: 'blank',
                type: 'boolean'
              }
            ]
          }
        ]
      }
    }
  ]
}
