import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'lorePage',
  title: 'Lore Page',
  type: 'document',
  fields: [
    defineField({
      name: 'firstSectionHeadline',
      title: 'First Section Headline',
      type: 'string',
    }),
    defineField({
      name: 'firstSectionText',
      title: 'First Section Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'firstSectionLink',
      title: 'First Section Link',
      type: 'link',
    }),
  ],
});
