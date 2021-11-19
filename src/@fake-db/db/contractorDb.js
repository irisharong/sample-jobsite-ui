import mock from '../mock';

const contractorDb = {
  profile: {
    about: {
      id: "01234",
      firstName: "Dylan",
      lastName: "Hodges",
      jobs: "102",
      earned: "100,000",
      jobTitle: "Frontend Dev",
      location: "Tokyo, Japan",
      language: "English, Japanese",
      rate: "$60/hr",
      yrsExperience: "10",
      website: "www.Dillionsays.com",
      skills: "Html",
      bio: `Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.`,  
    },
    reviews: [
      {
        employerId: "1",
        employerName: "New Monarchy",
        avatar: "",
        workRange: "August 29 - January 12",
        jobTitle: "Software Engineer ReactJS",
        rate: "$60/hr",
        totalPaid: "$12,000",
        totalHours: "112 Hours",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, dolore atque. Id nulla ut magnam maiores atque esse cum",
      },
      {
        employerId: "2",
        employerName: "Bungie",
        avatar: "",
        workRange: "December 12 - March 3",
        jobTitle: "Senior UI/UX Designer needed for ongoing support",
        rate: "$60/hr",
        totalPaid: "$12,000",
        totalHours: "112 Hours",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, dolore atque. Id nulla ut magnam maiores atque esse cum",
      },
      {
        employerId: "3",
        employerName: "The Vanguard",
        avatar: "",
        workRange: "June 1 - December 12",
        jobTitle: "Senior Frontend Developer",
        rate: "$60/hr",
        totalPaid: "$12,000",
        totalHours: "112 Hours",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, dolore atque. Id nulla ut magnam maiores atque esse cum",
      },
    ],
    portfolio: [
      {
        image: "https://picsum.photos/450/450",
        description: "Something cool and interesting about this project",
      },
      {
        image: "https://picsum.photos/450/450",
        description: "About this project, sit amet consectetur adipisicing elit.",
      },
      {
        image: "https://picsum.photos/450/450",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      },
      {
        image: "https://picsum.photos/450/450",
        description: "Something cool and interesting about this project",
      },
      {
        image: "https://picsum.photos/450/450",
        description: "About this project, sit amet consectetur adipisicing elit.",
      },
      {
        image: "https://picsum.photos/450/450",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      },
    ]
  }
};

mock.onGet('/api/contractor/profile').reply(config => {
	return [200, contractorDb.profile];
});
