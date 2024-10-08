import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => [Rule.required()],
    }),
  ],
});
