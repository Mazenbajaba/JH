const contactSchema = {
  name: 'contact',
  title: 'Contact Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'workingHours',
      title: 'Working Hours',
      type: 'string',
    },
    {
      name: 'mapUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
    },
  ],
};

export default contactSchema;
