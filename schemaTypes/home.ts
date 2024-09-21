import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
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
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'firstSectionImage',
      title: 'First Section Image',
      type: 'image',
    }),
    // ADD FEATURED BOOK HERE
    defineField({
      name: 'contactSectionHeadline',
      title: 'Contact Section Headline',
      type: 'string',
    }),
    defineField({
      name: 'contactSectionText',
      title: 'Contact Section Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
