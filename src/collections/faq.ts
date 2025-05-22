import { CollectionConfig } from 'payload'

export const FAQ: CollectionConfig = {
  slug: 'faq',
  fields: [
    { name: 'question', type: 'text', required: true },
    { name: 'answer', type: 'richText', required: true },
    {
      name: 'category',
      type: 'text',
      required: false,
    },
    {
      name: 'subCategory',
      type: 'text',
      required: false,
    },
  ],
}
