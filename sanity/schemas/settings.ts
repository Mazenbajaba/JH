const settingsSchema = {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};

export default settingsSchema;
