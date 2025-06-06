import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'firstSectionHeadline',
      title: 'First Section Headline',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'firstSectionText',
      title: 'First Section Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'firstSectionImage',
      title: 'First Section Image',
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
    }),
    defineField({
      name: 'featuredBookHeadline',
      title: 'Featured Book Headline',
      type: 'string',
      validation: (Rule) => [Rule.required(), Rule.max(40)],
    }),
    defineField({
      name: 'featuredBook',
      title: 'Featured Book',
      type: 'reference',
      to: [{ type: 'book' }],
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'featuredBookCta',
      title: 'Fetaured Book CTA',
      type: 'link',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'contactSectionHeadline',
      title: 'Contact Section Headline',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'contactSectionText',
      title: 'Contact Section Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
