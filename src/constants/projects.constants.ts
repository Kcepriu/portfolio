export const emptyProject = {
  id: 2,
  title: "",
  description: "",
  image: "",
  tags: [],
  source: "",
  code: "",
  codeBack: "",
};

export const projects = [
  {
    id: 1,
    title: "Goose-Track",
    description:
      "Team project about a tracker with authorization. Responsible for implementing the backend REST API for tasks and feedbacks.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bucket-a2d0b.appspot.com/o/postImages%2Fproject%20001.png?alt=media&token=130ea4e6-d6fc-4381-b65a-9e9c6722b001",

    tags: ["React", "JS", "Node.js", "Redux Toolkit", "Axios", "MongoDB"],

    source: "https://a-pinchuk.github.io/githack-GooseTrack-app/",
    code: "https://github.com/a-pinchuk/githack-GooseTrack-app",
    codeBack: "https://github.com/a-pinchuk/githack-GooseTrack-app-backEnd",
  },
  {
    id: 2,
    title: "Filmoteka",
    description: `Application for choosing a movie. 
                  App component with authentication from Firebase. A program component for
                  saving and reading data in the Firestore Database.`,
    image: "",

    tags: ["HTML", "SASS", "JS", "Firebase", "REST API", "AJAX", "Parcel"],

    source: "https://kyrylo2.github.io/filmoteka/",
    code: "https://github.com/Kyrylo2/filmoteka",
  },
  {
    id: 3,
    title: "FoodSta",
    description: `A website with a responsive layout. Role: Team Leads.
                  Build a project on GitHub, check for build errors, and live page performance.
                  Made modal window - “Order”`,
    image: "",

    tags: ["HTML", "SASS", "JS", "s"],

    source: "https://kcepriu.github.io/goit-food-sta/",
    code: "https://github.com/Kcepriu/goit-food-sta",
  },
];
