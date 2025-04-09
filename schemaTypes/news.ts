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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'an all-lowercase dash-separated string to use in the URL (ex. "godfreys-crusade")',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => [Rule.max(200)],
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      options: {
        timeStep: 60,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
});
