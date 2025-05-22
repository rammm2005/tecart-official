import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Staf', value: 'staf' },
        { label: 'Civitas', value: 'civitas' },
      ],
      defaultValue: 'civitas',
    },
    {
      name: 'permissions',
      type: 'array',
      fields: [
        {
          name: 'targetCollection',
          type: 'text',
          required: true,
        },
        {
          name: 'permissions',
          type: 'group',
          fields: [
            { name: 'create', type: 'checkbox' },
            { name: 'admin', type: 'checkbox' },
            { name: 'read', type: 'checkbox' },
            { name: 'update', type: 'checkbox' },
            { name: 'delete', type: 'checkbox' },
            { name: 'publish', type: 'checkbox' },
            { name: 'readVersions', type: 'checkbox' },
            { name: 'unlock', type: 'checkbox' },
          ],
        },
      ],
    },
    {
      name: 'profileImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'ig',
      type: 'text',
    },
    {
      name: 'github',
      type: 'text',
    },
  ],
  timestamps: true,
}
