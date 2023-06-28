// eslint-disable-next-line
export const argTypes = {
  apiKey: {
    type: { name: 'string' },
    description: 'Your Constructor API key',
    table: {
      type: {
        summary: 'string',
      },
    },
    control: {
      type: 'text',
    },
  },
  quizId: {
    type: { name: 'string' },
    description: 'ID of the quiz',
    table: {
      type: {
        summary: 'string',
      },
    },
    control: {
      type: 'text',
    },
  },
  primaryColor: {
    type: 'text',
  },
};
