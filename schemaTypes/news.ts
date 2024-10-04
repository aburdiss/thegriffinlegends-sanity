import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'news',
  title: 'news',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
      name: 'address1',
      title: 'Address Line 1',
      type: 'string',
    }),
    defineField({
      name: 'address2',
      title: 'Address Line 2',
      type: 'string',
    }),
    defineField({
      name: 'address3',
      title: 'Address Line 3',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
});
