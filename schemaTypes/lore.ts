import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'lore',
  title: 'Lore',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => [Rule.required()],
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
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Alternative text is required.',
          hidden: ({ parent }) => !parent?.asset,
          validation: (Rule) => [Rule.required()],
        },
      ],
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Alternative text is required.',
              hidden: ({ parent }) => !parent?.asset,
              validation: (Rule) => [Rule.required()],
            },
          ],
        },
      ],
      validation: (Rule) => [Rule.required()],
    }),
  ],
});
