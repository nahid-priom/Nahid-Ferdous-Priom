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
  pathok,
  lskit,
  carrent,
  jobit,
  tripguide,
  threejs,
  tour,
  cuet,
  grocery,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Figma Designer",
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
    title: "Frontend Developer",
    company_name: "LSkit",
    icon: lskit,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "WordPress Developer",
    company_name: "Pathok Point",
    icon: pathok,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Jun 2023",
    points: [
      "Design and develop pathok point website",
      "Increased performace up to 40% by reducing inital server response time",
      "Resolved critical bugs, improving system stability and user satisfaction",
    ],
  },
  
];


const projects = [
  {
    name: "Social Media",
    description:
      "A dynamic social platform with Google login, empowering users to share images and exchange thoughts through comments. Elevating the online experience, it thrives on visual content and meaningful interactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/nahid-priom/Social_media_frontend",
  },
  {
    name: "Pathok Point",
    description:
      "Crafted a WordPress e-commerce site, seamlessly integrating BKash and Nagad payment gateways. Empowering smooth transactions and providing a user-friendly experience for online shoppers.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "Woocommerce",
        color: "green-text-gradient",
      },
      {
        name: "Elementor",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://pathokpoint.com/",
  },
  {
    name: "Aliba International",
    description:
      "Designed a dynamic website for international trade, facilitating seamless import and export operations. Enhanced user experience with intuitive navigation and comprehensive information for global business endeavors.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ls-kit/alnext2",
  },
  {
    name: "Tour & Travels",
    description:
      "Dynamic tour and travel website powered by React, offering seamless navigation, vibrant visuals, and personalized itineraries, making every journey an unforgettable adventure. Explore the world effortlessly.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "green-text-gradient",
      },
    ],
    image: tour,
    source_code_link: "https://github.com/nahid-priom/Tour-Travels-ReactJs",
  },
  {
    name: "University Website",
    description:
      "University website leveraging Html & CSS, delivering a user-friendly experience. Dynamic, informative, and engaging, fostering an interactive connection between students and the institution.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: cuet,
    source_code_link: "https://github.com/nahid-priom/Responsive-University-CUET--Website-Html-Css",
  },
  {
    name: "Grocery Shop",
    description:
      "Revolutionizing grocery shopping with a React-powered website. Explore a vast range of products, seamless navigation, and convenient online ordering for a modern and efficient shopping experience.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    image: grocery,
    source_code_link: "https://github.com/nahid-priom/Grocery-Shop",
  },
];

export { services, technologies, experiences, projects };
