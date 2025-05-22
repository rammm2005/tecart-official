import { slugField } from '@/fields/slug'
import { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
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
    { name: 'division', type: 'relationship', relationTo: 'divisions' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'link', type: 'text' },
    ...slugField(),
  ],
}
