import { CollectionConfig } from 'payload'

export const Leaderboard: CollectionConfig = {
  slug: 'leaderboard',
  defaultPopulate: {
    meta: {
      image: true,
      description: true,
    },
  },
  fields: [
    { name: 'user', type: 'relationship', relationTo: 'users', required: true },
    { name: 'points', type: 'number', required: true },
  ],
}
