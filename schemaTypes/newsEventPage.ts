import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'newsEventPage',
  title: 'News and Events Page',
  type: 'document',
  fields: [
    defineField({
      name: 'mainHeadline',
      title: 'Main Headline',
      type: 'string',
    }),
    defineField({
      name: 'eventsHeadline',
      title: 'Events Headline',
      type: 'string',
    }),
    defineField({
      name: 'pastEventsHeadline',
      title: 'Past Events Headline',
      type: 'string',
    }),
    defineField({
      name: 'newsHeadline',
      title: 'News Headline',
      type: 'string',
    }),
  ],
});
