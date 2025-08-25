/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 800 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yug Vajani",
  title: "Hi all, I'm Yug",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 with expertise in frontend and backend development using React, Python, Java, and more. Beyond coding, I enjoy sports, traveling, sketching, and dancing."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1utftqXKmppqFuMVwzr65kliYktHCg52W/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yugvajani",
  linkedin: "https://www.linkedin.com/in/yug-vajani-8161a419a/",
  gmail: "yvajani2@illinois.edu",
  instagram: "https://www.instagram.com/yugvajani/",
  // Add acm and illinois email
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate software developer with an insatiable curiosity to dive into every tech stack, always eager to experiment, learn, and push boundaries in the ever-evolving world of technology.",
  skills: [
    "and many more...",
    emoji(
      "⚡ Enthusiastic about building dynamic, responsive, and high-performance frontend applications that deliver seamless user experiences. "
    ),
    emoji("⚡ Proficient in building robust and efficient APIs for seamless service integration and communication."),
    emoji(
      "⚡ Skilled with Docker for containerization, developing, and monitoring large-scale applications."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "bitbucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Illinois Urbana-Champaign",
      logo: require("./assets/images/uiucLogo.jpg"),
      subHeader: "Masters in Computer Science                                                                                             GPA :   4.0 / 4.0",
      duration: "August 2024 - December 2025",
      descBullets: [
        "CS Grad Teaching Assistant for 'Software Engineering I' with Dr.Darko Marinov"
      ],
      courses: [
        "Art of Web Programming", "Cloud Computing Applications", "Advanced topics in Software Engineering", "Advanced Machine Learning", "User Centered Machine Learning"
      ]
    },
    {
      schoolName: "Sardar Patel Institute of Technology",
      logo: require("./assets/images/spit.png"),
      subHeader: "Bachelor of Technology in Computer Engineering                             GPA :   9.72 / 10.0",
      duration: "August 2018 - May 2022",
      descBullets: [
        "Teaching Assistant for Advanced Data Structures and Algorithm",
        "Sports Secretary of College, part of Computer Society of India, Cricket Team of College",
        "Ranked in Top 10 of college"
      ],
      courses: [
        "Advanced Data Structures",
        "C",
        "Design and Analysis of Algorithms",
        "Database Management Systems",
        "Big Data Analytics",
        "Operating Systems",
        "Computer Networks",
        "Object Oriented Programming",
        "Machine Learning",
      ]
    }
  ]
};
// TODO: All courses not scrolling
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "UI/UX Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Testing & Quality Assurance",
      progressPercentage: "90%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer Engineer Intern",
      company: "Amazon",
      companylogo: require("./assets/images/aws.png"),
      descBullets: [
        "Spearheaded analytics migration from Amazon Pinpoint to CloudWatch for unified analytics platform, enabling better customer impact analysis, scalability and more robust troubleshooting capabilities.",
        "Designed and built logging infrastructure using CloudWatch and CDK.",
        "Delivered client-side analytics publishing to CloudWatch with aggregation, batching, backoff, and error handling.",
      ],
      techStack: ["C#, Typescript, AWS, Agile"]
    },
    {
      role: "Software Engineer II",
      company: "J.P.Morgan Chase & Co.",
      companylogo: require("./assets/images/jpmc.png"),
      descBullets: [
        "Enhanced frontend features, improving application performance by 35%, reducing client delays during trade placements.",
        "Set up infrastructure for disaster recovery, high availability, and failover mechanisms to ensure server reliability.",
        "Developed automation scripts, reducing manual testing efforts and decreasing production bugs.",
        "Utilized RxJS and Redux for state management and front-end integration with the server.",
        "Implemented socket-based data streaming, enabling server to handle 20,000 concurrent requests using multithreading.",
        "Performed backend service testing with JUnit, ensuring robust and reliable functionality."
      ],
      techStack: ["React, RxJS, SpringBoot, Agile, Jest, Junit"]
    },
    {
      role: "Software Developer Intern",
      company: "Prime Software Solutions",
      companylogo: require("./assets/images/prime.png"),
      descBullets: [
        "Established an efficient GST Tax Automation System using Agile methodologies to adapt to changing GST rules.",
        "Overhauled API connections by removing outdated endpoints and improving response times by 15%.",
        "Optimized MySQL queries, reducing execution time and database load, enhancing system performance."
      ],
      techStack: ["React, Python, Agile, MySQL"]
    },
    {
      role: "Software Developer Intern",
      company: "LetsAlign",
      companylogo: require("./assets/images/letsalign.png"),
      descBullets: [
        'Drove the design and development of Intelligent Virtual Assistants for platforms like WhatsApp and Facebook, serving clients such as Eurokids, ISPP, Fortis Healthcare, and LivPure.',
        'Built and maintained Shopify websites for businesses such as WellBeing Nutrition, Gaya, and Vardenchi.',
        'Tested the application as an end user to identify and report bugs, ensuring a smooth experience.',
      ],
      techStack: ["JavaScript, Python, ML/ AI, Django"]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [

  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications and Publications "),
  subtitle:
    "Certifications and Research Publications that I have done !",

  achievementsCards: [
    {
      title: "AWS Cloud Practitioner",
      subtitle:
        "Learnt foundational knowledge of AWS Cloud concepts, services, security, pricing, and architecture",
      image: require("./assets/images/aws-certified-cloud-practitioner.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.credly.com/badges/f4dd0172-7ce4-4d50-8f5a-cb8a93d853f7/public_url"
        }
      ]
    },
    {
      title: "Reducing Gender and Ethnicity Bias In Personality Trait Prediction",
      subtitle:
        "Designed a website to streamline recruitment by predicting candidates' personality traits during screening. Another aim of the project was to reduce gender and ethnicity biases in making the predictions. ",
      image: require("./assets/images/personality.jpg"),
      imageAlt: "IEEE Logo",
      footerLink: [
        {
          name: "View the Publication",
          url: "https://ieeexplore.ieee.org/document/10497190"
        }
      ]
    },
    {
      title: "Automated Paper Evaluation System for Subjective Handwritten Answers",
      subtitle: "Developed an application to automate the grading of handwritten student assessments, providing scores with detailed breakdowns. ",
      image: require("./assets/images/grade.png"),
      imageAlt: "IEEE Logo",
      footerLink: [
        { name: "View the Publication", url: "https://ieeexplore.ieee.org/document/9579912" },

      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Pos of Resp

const posOfResponsibilitySection = {
  title: "Position of Responsibility",
  subtitle:
    "Apart from Academics, I have been actively involved in a lot of extra curriculars where I learnt about Leadership and Teamwork.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  responsibilities: [
    {
      title: "Graduate Teaching Assistant",
      subtitle:
        ["Guided students in software engineering principles. ",
          "Reviewed code assignments for best practices. ",
          "Held office hours for debugging and project support."],
      image: require("./assets/images/uiucLogo.jpg"),
      imageAlt: "University of Illinois Urbana-Champaign Logo",
      footerLink: [
      ]
    },
    {
      title: "Code for Good Hackathon Organizing Team",
      subtitle:
        "Worked along with a large team to organize a 24 hour global hackathon which serves as the hiring process for new graduates at J.P. Morgan Chase & Co.",
      image: require("./assets/images/cfg.png"),
      imageAlt: "Code For Good Logo",
      footerLink: [
      ]
    },
    {
      title: "SEPathon Organizing Team",
      subtitle:
        "Key organizer of an internal hackathon at JP Morgan Chase & Co., designed to engage and mentor newly joined students. ",
      image: require("./assets/images/jpmc.png"),
      imageAlt: "SEPathon Logo",
      footerLink: [
      ]
    },
    {
      title: "Mumbai Tech Centre Fun Activity Organizing Team",
      subtitle:
        "Key organizer for the monthly fun activities organized at the Mumbai Tech Centre of J.P.Morgan Chase & Co. ",
      image: require("./assets/images/jpmc.png"),
      imageAlt: "MTC Logo",
      footerLink: [
      ]
    },
    {
      title: "Sports Secretary",
      subtitle:
        "I was responsible for overseeing the entire sports administration of the college for the year 2020-2021. ",
      image: require("./assets/images/spit.png"),
      imageAlt: "SPIT Logo",
      footerLink: [
      ]
    },
    {
      title: "Events Team of Computer Society of India, S.P.I.T.",
      subtitle:
        "Conducted technical coding lectures for juniors and contributed to organizing the CSI Hackathon at S.P.I.T. ",
      image: require("./assets/images/csi.jpg"),
      imageAlt: "CSI Logo",
      footerLink: [
      ]
    },
    {
      title: "Abhyudaya, SPJIMR ",
      subtitle:
        "This program was launched to educate underprivileged students, and I was part of the team that taught them.",
      image: require("./assets/images/abhyudaya.jpg"),
      imageAlt: "Abhyudaya Logo",
      footerLink: [
      ]
    },
    {
      title: "Oculus, S.P.I.T.",
      subtitle:
        "Organized an IPL auction event at the college's cultural fest, attracting a large audience. ",
      image: require("./assets/images/oculus.jpg"),
      imageAlt: "Oculus Logo",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Please feel free to reach out to me. My Inbox is open for all.",
  number: "",
  email_address: ""
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  posOfResponsibilitySection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

// npm run deploy