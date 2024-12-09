import { mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, java, python, pytorch, postgresql, meta, accurate, Accenture, tesla, kans, mario, disease, threejs } from "../assets";
export const navLinks = [{
  id: "about",
  title: "About"
}, {
  id: "work",
  title: "Work"
}, {
  id: "contact",
  title: "Contact"
}];
const services = [{
  title: "Database Management",
  icon: web
}, {
  title: "Machine Learning",
  icon: mobile
}, {
  title: "Data Engineering",
  icon: backend
}, {
  title: "Software Development",
  icon: creator
}];
const technologies = [{
  name: "Java",
  icon: java
}, {
  name: "Python",
  icon: python
}, {
  name: "HTML 5",
  icon: html
}, {
  name: "CSS 3",
  icon: css
}, {
  name: "JavaScript",
  icon: javascript
}, {
  name: "React JS",
  icon: reactjs
}, {
  name: "Postgres",
  icon: postgresql
}, {
  name: "MongoDB",
  icon: mongodb
}, {
  name: "PyTorch",
  icon: pytorch
}, {
  name: "git",
  icon: git
}, {
  name: "docker",
  icon: docker
}];
const experiences = [{
  title: "Data Engineering, Management & Governance Associate",
  company_name: "Accenture",
  icon: Accenture,
  iconBg: "#383E56",
  date: "November 2022 - July 2024",
  points: ["Designed and implemented ETL processes to extract data from multiple sources.", "Enhanced Data Integrity by performing robust validation processes, reducing data discrepancies, and ensuring accurate and reliable regulatory reporting for the client (Bank of America).", "Leveraged CI/CD pipelines to facilitate seamless integration of new features into the UI, resulting in faster turnaround times for delivering updates.", "Formulated comprehensive test scripts leading to a 50% reduction in manual testing efforts, enabling the automation team to conduct regression testing and ensure system stability."]
}, {
  title: "Data Science Intern",
  company_name: "Accurate Info Solutions",
  icon: accurate,
  iconBg: "#E6DEDD",
  date: "Jan 2022 - Mar 2022",
  points: ["Collected and preprocessed data by handling missing values, outliers, and anomalies to ensure data quality.", "Performed Exploratory Data Analysis to uncover patterns, correlations, and insights using statistical techniques and visualization tools using NumPy, Pandas, Matplotlib, Seaborn and other python libraries.", "Built and trained machine learning models using regression, classification and clustering algorithms and achieved a prediction accuracy score of 87%."]
}
// {
//   title: "Web Developer",
//   company_name: "Shopify",
//   icon: shopify,
//   iconBg: "#383E56",
//   date: "Jan 2022 - Jan 2023",
//   points: [
//     "Developing and maintaining web applications using React.js and other related technologies.",
//     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//     "Implementing responsive design and ensuring cross-browser compatibility.",
//     "Participating in code reviews and providing constructive feedback to other developers.",
//   ],
// },
// {
//   title: "Full stack Developer",
//   company_name: "Meta",
//   icon: meta,
//   iconBg: "#E6DEDD",
//   date: "Jan 2023 - Present",
//   points: [
//     "Developing and maintaining web applications using React.js and other related technologies.",
//     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//     "Implementing responsive design and ensuring cross-browser compatibility.",
//     "Participating in code reviews and providing constructive feedback to other developers.",
//   ],
// },
];
const testimonials = [{
  testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  name: "Sara Lee",
  designation: "CFO",
  company: "Acme Co",
  image: "https://randomuser.me/api/portraits/women/4.jpg"
}, {
  testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
  name: "Chris Brown",
  designation: "COO",
  company: "DEF Corp",
  image: "https://randomuser.me/api/portraits/men/5.jpg"
}, {
  testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  name: "Lisa Wang",
  designation: "CTO",
  company: "456 Enterprises",
  image: "https://randomuser.me/api/portraits/women/6.jpg"
}];
const projects = [{
  name: "Generating Synthetic Medical Imaging Data",
  description: "A Novel approach where the encoder and the decoder in the auto-encoder architecture were optimized with a library called ConvKans as KANs can be trained better even with data scarcity. Even if it is incosistent and computationally expnsive, it has potential.",
  tags: [{
    name: "convkans",
    color: "blue-text-gradient"
  }, {
    name: "auto-encoder",
    color: "green-text-gradient"
  }, {
    name: "jupyter",
    color: "pink-text-gradient"
  }],
  image: kans,
  source_code_link: "https://github.com/aaryachoudhary/CSE572-PROJECT"
}, {
  name: "Super Mario Reinforcement Learning",
  description: "In an attempt to train Mario as an agent and interact with its environment (the first level) , implemented a Reinforcement Learning Algorithm named the Double Deep Q Network algorithm to train the computer to play Super Mario Bros. on the NES(Nintendo Emulator System) Emulator.",
  tags: [{
    name: "reinforcement-learning",
    color: "blue-text-gradient"
  }, {
    name: "python",
    color: "green-text-gradient"
  }, {
    name: "pytorch",
    color: "pink-text-gradient"
  }],
  image: mario,
  source_code_link: "https://github.com/aaryachoudhary/Mario-RL"
}, {
  name: "Multiple Diseases Diagnostic Prediction",
  description: "A web application built using Streamlit, lets the user enter their details in the required field for respective disease diagnosis, these entries are then used to predict if the person has a heart disease, diabetes, or Parkinson's disease according to the category chosen and values entered.",
  tags: [{
    name: "python",
    color: "blue-text-gradient"
  }, {
    name: "machine-learning",
    color: "green-text-gradient"
  }, {
    name: "streamlit",
    color: "pink-text-gradient"
  }],
  image: disease,
  source_code_link: "https://github.com/aaryachoudhary/Multiple-Disease-Prediction-System"
}];
export { services, technologies, experiences, testimonials, projects };