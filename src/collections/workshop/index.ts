import { slugField } from '@/fields/slug'
import { CollectionConfig } from 'payload'

export const Workshops: CollectionConfig = {
  slug: 'workshops',
  defaultPopulate: {
    slug: true,
    meta: {
      image: true,
      description: true,
    },
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'richText' },
    {
      name: 'images',
      type: 'array',
      fields: [{ name: 'image', type: 'upload', relationTo: 'media' }],
    },
    { name: 'startDate', type: 'date', required: true },
    { name: 'startTime', type: 'text' },
    {
      name: 'locationType',
      type: 'select',
      options: ['online', 'on spot'],
    },
    { name: 'locationLink', type: 'text' },
    { name: 'category', type: 'relationship', relationTo: 'workshop-category' },
    { name: 'points', type: 'number', required: true },
    { name: 'autoRegisterOnClick', type: 'checkbox' },
    ...slugField(),
  ],
}
