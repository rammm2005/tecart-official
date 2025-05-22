import type { CollectionConfig } from 'payload'
import { isAdminOrStaf, isAdminOrStafBoolean } from './hooks/isAdminOrStaf'
import { slugField } from '@/fields/slug'

export const WorkshopCategory: CollectionConfig = {
  slug: 'workshop-category',
  access: {
    create: isAdminOrStaf,
    read: () => true,
    update: isAdminOrStaf,
    delete: isAdminOrStaf,
    admin: isAdminOrStafBoolean,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    ...slugField(),
  ],
  timestamps: true,
}
