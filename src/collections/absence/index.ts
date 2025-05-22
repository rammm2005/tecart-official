import { CollectionConfig } from 'payload'

export const Absences: CollectionConfig = {
  slug: 'absences',
  fields: [
    { name: 'user', type: 'relationship', relationTo: 'users', required: true },
    { name: 'workshop', type: 'relationship', relationTo: 'workshops', required: true },
    { name: 'status', type: 'select', options: ['present', 'absent'], required: true },
    { name: 'qrCodeImage', type: 'upload', relationTo: 'media' },
  ],
}
