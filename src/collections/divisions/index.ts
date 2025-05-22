import { slugField } from '@/fields/slug'
import { CollectionConfig } from 'payload'

export const Divisions: CollectionConfig = {
  slug: 'divisions',
  defaultPopulate: {
    slug: true,
    meta: {
      image: true,
      description: true,
    },
  },
  labels: { singular: 'Division', plural: 'Divisions' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    {
      name: 'tools',
      type: 'array',
      fields: [
        { name: 'toolName', type: 'text' },
        { name: 'toolImage', type: 'upload', relationTo: 'media' },
      ],
    },
    ...slugField(),
  ],
}
