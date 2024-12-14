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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Deployment",
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
    title: "MERN Stack Developer",
    company_name: "Freelancing",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2023 - Current",
    points: [
      "Developing and maintaining web applications using JavaScript, React.js, Next.js, and other modern technologies.",
      "Building scalable server-side functionality with Node.js and managing databases using MongoDB (Local Server & Atlas).",
      "Designing responsive and interactive user interfaces with TailwindCSS, Bootstrap, and Shadcn UI.",
      "Collaborating with clients and cross-functional teams, including designers and product managers, to deliver high-quality projects.",
      "Integrating third-party APIs like Google Maps API, Meta APIs, and payment gateways (e.g., Stripe, PayPal).",
      "Ensuring cross-browser compatibility and implementing responsive designs.",
      "Deploying and managing applications using AWS, Google Cloud, Docker, and other cloud platforms.",
      "Participating in code reviews and maintaining clean, efficient, and maintainable codebases.",
    ],
  },
  {
    title: "Senior Business Analyst",
    company_name: "Byjus",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Conducting interviews with key business users to collect information on business processes and user requirements.",
      "Analyzing application usage and providing data to the frontend development team with actionable insights.",
      "Applying problem-solving skills to analyze and resolve issues impacting business operations and goal achievement.",
      "Evaluating key aspects of the business to identify factors driving results and summarizing findings into presentations.",
      "Developing complex dashboards and reporting tools to track and visualize business performance metrics.",
    ],
  },
  {
    title: "Associate",
    company_name: "Wipro",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2019 - Feb 2020",
    points: [
      "Participating in designing commissioning/qualification/verification (CQV) protocols for new project development and acquisition.",
      "Providing troubleshooting expertise to HP APAC in development for enhanced user experience.",
      "Designing cross-functional interactions to reduce dependency and redundancy between diverse operational teams.",
      "Presenting new design and operational guidelines to senior engineers, resulting in a 47% improvement in task completion.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sandip proved me wrong.",
    name: "Koushik Dey",
    designation: "CFO",
    company: "Popular Drug House",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sandip does.",
    name: "Swapan",
    designation: "COO",
    company: "Peregrine Falcon PVT LTD",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sandip optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Souvick Dey",
    designation: "CTO",
    company: "Peregrine Falcon PVT LTD",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Popular Drug House",
    description:
      "Popular Drug House is a comprehensive pharmacy store website designed and developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform offers robust features like CRUD operations for managing doctor updates, user management, admin controls, and secure authentication..",
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
    image: carrent,
    source_code_link: "https://github.com/JarvisStark24/Popular-Drug-House",
  },
  {
    name: "Peregrine Falcon PVT LTD",
    description:
      "This Web Application hosts the Pharmaceutical Management System developed for Peregrine Falcon Pharmaceuticals Pvt. Ltd.. The system is designed to streamline pharmaceutical operations, featuring a responsive company website and to showcase products/brochure, meeting all the marketing needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/JarvisStark24/peregrine-pharma",
  },
  {
    name: "Task Manager",
    description:
      "This is the official Reporting System and Admin Panel/Dashboard for Peregrine Falcon Pharmaceuticals Pvt Ltd. Built with the MERN stack, Next.js, and TypeScript, it is designed to streamline operations for admins, managers, and medical representatives (MRs) in the pharmaceutical field.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "shadCn",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/JarvisStark24/Task-Manager",
  },
];

export { services, technologies, experiences, testimonials, projects };
