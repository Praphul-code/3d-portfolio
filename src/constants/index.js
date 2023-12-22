import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  praphul,
  anilGupta,
  whizcloud,
  memories,
  iNotebook
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Ionic Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "FULL STACK DEVELOPER",
    company_name: "Atilo Fitness App - Whiz Cloud Private Limited",
    icon: whizcloud,
    iconBg: "#383E56",
    date: "Dec 2022 - April 2023",
    points: [
     " Contributed significantly as part of a dynamic team on a  live project, actively developing a cross-platform mobile, iOS, and web application. Leveraged Ionic, React, and  TypeScript to create numerous UI screens and  components, amplifying the project's scope and functionality.",
   " Collaborated with team members to integrate APIs and worked on frontend using Redux, Ionic, React-Hook form, and REST AP"
    ],
  },
  {
    // title: "FULL STACK DEVELOPER",
    company_name: "DomuSearch - Whiz Cloud Private Limited",
    icon: whizcloud,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Implemented a robust Model-View-Controller (MVC)architecture, crafting efficient endpoints tailored to Domusearch's needs.",
      "Focused on user permissions for Domusearch, making it more secure with specialized authentication setups.",
      "Generated comprehensive Swagger API documentation,ensuring clarity and accessibility for Domusearch's endpoints.",
      "Proficiently utilized Node.js, Express.js, Sequelize, SQL,and Swagger to power Domusearch's backend operations.",
      "Successfully optimized API loading times, enhancing Domusearch's overall performance. ",
      "Automated critical operations within Domusearch through skillful use of cron jobs, ensuring smooth and scheduled functionalities. "
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Praphul does.",
    name: "Anil Gupta",
    designation: "CEO",
    company: "Whiz Cloud Private Limited ",
    image: anilGupta,
  },
];

const projects = [
  {
    name: "Memories",
    description:
      "Web-based platform that allows users to search, create, and manage memories and excited momemts of their life.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: memories,
    source_code_link: "https://github.com/Praphul-code/Memories",
  },
  {
    name: "iNoteBook",
    description:
      "Web application that enables users to add, update and delete thier notes. This app has gorgeous ui and smooth operation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: iNotebook,
    source_code_link: "https://github.com/Praphul-code/inotebook",
  },
];

export { services, technologies, experiences, testimonials, projects };
