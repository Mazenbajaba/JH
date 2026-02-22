const productSchema = {
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Necklaces', value: 'Necklaces' },
          { title: 'Earrings', value: 'Earrings' },
          { title: 'Bracelets', value: 'Bracelets' },
          { title: 'Rings', value: 'Rings' },
        ],
      },
    },
    {
      name: 'images',
      title: 'Skin Tone Images',
      type: 'object',
      fields: [
        {
          name: 'light',
          title: 'Light Skin Tone Image',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'medium',
          title: 'Medium Skin Tone Image',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'deep',
          title: 'Deep Skin Tone Image',
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
  ],
};

export default productSchema;
