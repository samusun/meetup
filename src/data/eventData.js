export const eventData = [
  {
    eventName: 'Fun',
    date: 20211120,
    time: '19.00',
    place: 'Korsvägen',
    description: 'We will meet and have fun',
    participants: 10,
    participantsMax: 20,
    previous: true,
    comments: []
  },

  {
    eventName: 'Laughing',
    date: 20211126,
    time: '19.00',
    place: 'Linnéplatsen',
    description: 'We will meet and have a laugh',
    participants: 0,
    participantsMax: 10,
    previous: true,
    comments: [
      { user: 'Ricky', comment: 'Very fun' },
      { user: 'MyMan', comment: 'I love this' }
    ]
  },

  {
    eventName: 'Jokes',
    date: 20221120,
    time: '19.00',
    place: 'Slottskogen',
    description: 'We will meet and make jokes',
    participants: 5,
    participantsMax: 30,
    previous: false,
    comments: [
      { user: 'Ricky', comment: 'Very fun' },
      { user: 'MyMan', comment: 'I love this' }
    ]
  },

  {
    eventName: 'Sailing',
    date: 20211210,
    time: '16.00',
    place: 'Marstrand',
    description: 'Sailing around sweden',
    participants: 5,
    participantsMax: 30,
    previous: true,
    comments: [
      { user: 'Ricky', comment: 'Very fun' },
      { user: 'MyMan', comment: 'I love this' }
    ]
  }
];
