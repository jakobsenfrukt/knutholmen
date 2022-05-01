export default {
  name: "localeSlug",
  type: "object",
  title: "Slug",
  fields: [
    {
      name: "no",
      type: "slug",
      title: "Norsk",
      options: {
        source: (doc) => doc.title.no,
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: "en",
      type: "slug",
      title: "Engelsk",
      options: {
        source: (doc) => doc.title.en,
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
  ],
};
