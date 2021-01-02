import { v4 as uuidv4 } from "uuid"

export const data = {
  people: [
{
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
        city: "San Francisco",
        state: "California",
        country: "USA",
      },
    },
 {
      id: uuidv4(),
      name: "Nurlana Mollayeva",
      img: "https://avatars2.githubusercontent.com/u/74115466?v=4",
      links: {
        website: "https://goupaz.com",
        linkedin: "https://www.linkedin.com/in/nurlana1/",
        github: "https://github.com/Nurlana1",
      },
      jobTitle: "Community Manager",
      location: {
        city: "Baku",
        country: "Azerbaijan",
      },
    }, ],
}
