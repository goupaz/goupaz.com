import { v4 as uuidv4 } from "uuid"

export const data = {
  people: [
    ...Array(100).fill({
      id: uuidv4(),
      name: "Sako M",
      img: "https://avatars3.githubusercontent.com/u/43357548?v=4",
      links: {
        website: "https://goupaz.com",
        linkedin: "https://www.linkedin.com/in/sakom/",
        github: "https://github.com/sakomws",
      },
      jobTitle: "DevOps",
      location: {
        city: "Redwood",
        state: "California",
        country: "USA",
      },
    }),
  ],
}
