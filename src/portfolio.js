/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  duration: 4000 // Set duration for Three.js D20 animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kenny Reynaldo",
  title: "Hi, I'm Kenny",
  subTitle: emoji(
    "A Full Stack Software Developer having an experience of building Backend, Web, and Mobile applications with JavaScript / Nodejs / Vue / Astro and a whole lot of other libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1atU3_Shcn11wjmV9PY4UBWcdL4JEK4mU/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Warwolfer",
  linkedin: "https://www.linkedin.com/in/kenny-reynaldo/",
  gmail: "kennyreynaldo22@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Mystical Abilities",
  subTitle:
    "A digital sorcerer wielding arcane knowledge across realms of technology",
  skills: [
    emoji(
      "⚡ Craft enchanting user interfaces that captivate and guide adventurers through digital realms"
    ),
    emoji(
      "⚡ Weave Progressive Web Applications with the power of ancient SPA magics"
    ),
    emoji(
      "⚡ Forge resilient backend strongholds with crystalline database architectures"
    ),
    emoji(
      "⚡ Channel third-party energies from mystical clouds like Firebase and Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "ruby on rails",
      fontAwesomeClassname: "fas fa-gem"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Institut Teknologi Harapan Bangsa",
      logo: require("./assets/images/ithb.png"),
      subHeader: "Bachelor of Engineering in Informatics Engineering",
      duration: "July 2015 - June 2018",
      desc: "GPA - 3.76/4.00",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Enchantment", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Mastery",
      progressPercentage: "80%"
    },
    {
      Stack: "Arcane Coding",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Architect",
      company: "Happy5",
      companylogo: require("./assets/images/happy5.webp"),
      date: "December 2021 – Present",
      desc: "A company that offers web-based performance management solutions.",
      descBullets: [
        "Developed and designed the back-end service for Happy5, including permissions, goals, database operations, jobs, account management, and formal review modules",
        "Developed the back-end for the applications using Ruby on Rails"
      ]
    },
    {
      role: "Mobile Artificer",
      company: "WIT.ID",
      companylogo: require("./assets/images/wit.png"),
      date: "October 2019 – January 2021",
      desc: "A software developer company providing services for various clients.",
      descBullets: [
        "Developed and designed various mobile applications, including a mobile e-commerce application for Erajaya group",
        "Prototyped and designed UI and UX for mobile applications using Java and Swift"
      ]
    },
    {
      role: "Full Stack Wizard",
      company: "Sunwell System",
      companylogo: require("./assets/images/sunwell.png"),
      date: "September 2018 – October 2019",
      desc: "A software developer company providing services for information system.",
      descBullets: [
        "Developed and designed various web applications including a web-based ERP application for clients",
        "Prototyped and designed UI and UX for applications using Vue.js and Laravel"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Legendary Quests",
  subtitle: "Epic adventures and artifacts forged in collaboration",
  projects: [
    {
      image: require("./assets/images/sonstream.jpg"),
      projectName: "Sonstream",
      projectDesc: "A pay-per-play music streaming service",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sonstream.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Sacred Scrolls & Honors 🏆 "),
  subtitle: "",

  achievementsCards: [
    {
      title: "Scrum Master Certification",
      subtitle: "Certified Indonesia Scrum Master I by Ekipa.co",
      image: require("./assets/images/ekipa.webp"),
      imageAlt: "Ekipa Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+6281224264314",
  email_address: "kennyreynaldo22@gmail.com"
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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
