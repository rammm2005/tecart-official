import type { CollectionConfig } from 'payload'

export const OrganizationMembers: CollectionConfig = {
  slug: 'organization-members',
  defaultPopulate: {
    meta: {
      image: true,
      description: true,
    },
  },
  labels: {
    singular: 'Member',
    plural: 'Organization Members',
  },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'instagram',
      type: 'text',
    },
    {
      name: 'github',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      options: [
        { label: 'Ketua', value: 'ketua' },
        { label: 'Wakil Ketua', value: 'wakil' },
        { label: 'Sekretaris', value: 'sekretaris' },
        { label: 'Bendahara', value: 'bendahara' },
        { label: 'Koordinator Divisi', value: 'koordinator' },
        { label: 'Anggota', value: 'anggota' },
      ],
    },
    {
      name: 'positionDetail',
      label: 'Detail Posisi (opsional)',
      type: 'text',
      admin: {
        description: 'Contoh: Sekretaris 1, Bendahara 2, Koordinator UI/UX',
      },
    },
    {
      name: 'division',
      type: 'relationship',
      relationTo: 'divisions',
      required: false,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
