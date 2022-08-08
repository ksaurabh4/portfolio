/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  // googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "KumarSaurabh",
  logo_name: ".meKumar",
  nickname: "Kumar",
  full_name: "Kumar Saurabh",
  subTitle:
    "You Give Me Any Task I will do it Anyway. Full Stack Developer, Problem Solver 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1GTabmHe4Eb-MdtktbbCj2JGJjPQ8ZSur/view?usp=sharing",
  mail: "mailto:ksaur1990@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/ksaurabh4",
  linkedin: "https://www.linkedin.com/in/ksaurabh4/",
  gmail: "ksaur1990@gmail.com",
  // gitlab: "https://gitlab.com/ksaurabh4",
  facebook: "https://www.facebook.com/ksaurabh4/",
  twitter: "https://twitter.com/ksaurabh4",
  instagram: "https://www.instagram.com/ksaurabh4/",
  youtube: "https://www.youtube.com/thoughtCurator",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node & Express",
        "⚡ Creating mobile applications in Flutter",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
        "⚡ Developing wordpress websites based on WP themes",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FFA500",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        // {
        //   skillName: "Apache",
        //   fontAwesomeClassname: "simple-icons:apache",
        //   style: {
        //     color: "#CA1A22",
        //   },
        // },
        // {
        //   skillName: "Python",
        //   fontAwesomeClassname: "simple-icons:python",
        //   style: {
        //     color: "#3776AB",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        // {
        //   skillName: "GitHub Actions",
        //   fontAwesomeClassname: "simple-icons:githubactions",
        //   style: {
        //     color: "#5b77ef",
        //   },
        // },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    // {
    //   title: "Rajdhani Collage, Delhi University",
    //   subtitle: "Bachelor of Science",
    //   logo_path: "rajdhani.png",
    //   alt_name: "Rajdhani Collage",
    //   duration: "2007 - 2010",
    //   descriptions: [
    //     // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
    //     // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
    //     // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
    //   ],
    //   website_link: "https://www.rajdhanicollege.ac.in/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "React (Basic)",
      subtitle: "HackerRank",
      logo_path: "hackerRank.svg",
      certificate_link:
        "https://www.hackerrank.com/certificates/e9329c64036c?test_finished=true",
      alt_name: "React Course",
      color_code: "#d7fcfb",
      // color_code: "#47A048",
    },
    {
      title: "React & Redux",
      subtitle: "Modern React with Redux",
      logo_path: "react.png",
      certificate_link:
        "https://drive.google.com/file/d/1oSuErVr9G9mtcosBLCS38lpAKCMHed6d/view?usp=sharing",
      alt_name: "React Course",
      color_code: "#d7fcfb",
      // color_code: "#47A048",
    },
    {
      title: "Advance CSS & SASS/SCSS",
      subtitle: "Advanced CSS and Sass - Flexbox, Grid, Animations and More",
      logo_path: "sass.png",
      certificate_link:
        "https://drive.google.com/file/d/1ZctYOnly1vRvKQpSzpcLusE-Hty9Tgk0/view?usp=sharing",
      alt_name: "SASS",
      color_code: "#fcc5f0",
    },
    {
      title: "Node JS",
      subtitle: "The complete Nodejs Developer Course (3rd Edition)",
      logo_path: "nodejs.png",
      certificate_link:
        "https://drive.google.com/file/d/19hdK67kZRZyI_ugwWI-sNizthzFKPkya/view?usp=sharing",
      alt_name: "Node JS",
      // color_code: "#F6B808",
      color_code: "#98f599",
    },
    {
      title: "Javascript",
      subtitle: "The complete javaScript Course 2020 - Build Real Projects",
      logo_path: "js.png",
      certificate_link:
        "https://drive.google.com/file/d/1kIF6-B_vAWNaAsxLNkMECADtWk0SfndX/view?usp=sharing",
      alt_name: "Javascript",
      color_code: "#faf9b6",
    },
    {
      title: "JavaScript Deep Concepts",
      subtitle: "JavaScript Understanding the weird Parts",
      logo_path: "js.png",
      certificate_link:
        "https://drive.google.com/file/d/137KD2Lw0tOcniHHsI57RPdoj6WA4yLHz/view?usp=sharing",
      alt_name: "JavaScript",
      color_code: "#faf9b6",
    },
    {
      title: "Front-End Development",
      subtitle: "Foundation of Front-End Web Developement",
      logo_path: "fe.png",
      certificate_link:
        "https://drive.google.com/file/d/1mRmhhiaLHDlRjtEMz70168qa2za27gsO/view?usp=sharing",
      alt_name: "Front-End Development",
      color_code: "#2AAFED",
    },
    {
      title: "HTML5 & CSS",
      subtitle: "Build responsive Real World websit with HTML5 and CSS3",
      logo_path: "css_html.png",
      certificate_link:
        "https://drive.google.com/file/d/1NOJis_W3GqH-Wwrplpq4AB-fdwH91ilR/view?usp=sharing",
      alt_name: "HTML & CSS",

      color_code: "#fffbf3",
    },
  ],
};
//Blogs Page
const blogSection = {
  title: "Blogs",
  subtitle:
    "I have my own wordpress blogging website where I post about Javascript Turorials, personal experiences etc.",
  link: "https://whynotgoogleit.com/",
};
const blogs = {
  blogs: [
    {
      subtitle:
        "JavaScript Variable Scope Chain and Variable Environment – The Core Concepts",
      logo_path:
        "https://whynotgoogleit.com/wp-content/uploads/2020/05/Variable-Scope-Chain-and-variable-environment-1024x536.png",
      blog_link: "https://whynotgoogleit.com/variable-scope-chain/",
      alt_name: "javascript variable scope chain",
      color_code: "#d7fcfb",
    },
    {
      subtitle: "JavaScript Execution Context, Execution Stack and Hoisting",
      logo_path:
        "https://whynotgoogleit.com/wp-content/uploads/2020/05/JavaScript-Execution-Stack-And-Hoisting-1024x536.png",
      blog_link:
        "https://whynotgoogleit.com/javascript-execution-stack-and-hoisting/",
      alt_name: "JavaScript Execution Context",
      color_code: "#d7fcfb",
    },
    {
      subtitle: "JavaScript Global Execution Context – Behind the Scene",
      logo_path:
        "https://whynotgoogleit.com/wp-content/uploads/2020/05/JavaScript-Global-Execution-Context-Cover-Image-1024x536.png",
      blog_link:
        "https://whynotgoogleit.com/javascript-global-execution-context-and-global-object/",
      alt_name: "JavaScript Execution Context",
      color_code: "#d7fcfb",
    },
    {
      subtitle: "Top 5 JavaScript Array Methods To Access Through Elements",
      logo_path:
        "https://whynotgoogleit.com/wp-content/uploads/2020/04/top-5-array-methods-to-access-the-elements-1024x576.png",
      blog_link:
        "https://whynotgoogleit.com/top-5-javascript-array-methods-working-through-elements/",
      alt_name: "JavaScript Array Methods",
      color_code: "#d7fcfb",
    },
    {
      subtitle: "Most Used JavaScript Array Methods – Finding The Elements",
      logo_path:
        "https://whynotgoogleit.com/wp-content/uploads/2020/04/20200424_135226_0000-1024x576.png",
      blog_link:
        "https://whynotgoogleit.com/javascript-array-methods-for-finding-the-elements/",
      alt_name: "JavaScript Array Methods",
      color_code: "#d7fcfb",
    },
    {
      subtitle: "JavaScript Array Methods – Add and Remove",
      logo_path:
        "https://whynotgoogleit.com/wp-content/uploads/2020/04/JavaScript-Array-methods-lessons-2-1024x576.png",
      blog_link: "https://whynotgoogleit.com/javascript-array-methods/",
      alt_name: "JavaScript Array Methods",
      color_code: "#d7fcfb",
    },
    {
      subtitle:
        "JavaScript Array to make our life easy – Under the Hood Concepts",
      logo_path:
        "https://whynotgoogleit.com/wp-content/uploads/2020/04/20200418_015149_0000.png",
      blog_link: "https://whynotgoogleit.com/javascript-array-basics-tutorial/",
      alt_name: "javascript basics concepts",
      color_code: "#d7fcfb",
    },
    {
      subtitle:
        "Indian in China During Corona – Story Behind Why Not Google It",
      // subtitle: "Modern React with Redux",
      logo_path:
        "https://whynotgoogleit.com/wp-content/uploads/2020/04/why-not-google-it-1024x683.jpg",
      blog_link:
        "https://whynotgoogleit.com/indian-in-china-why-not-google-it/",
      alt_name: "Indian in China Story",
      color_code: "#d7fcfb",
      // color_code: "#47A048",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Project Lead - System",
          company: "Mphasis Ltd.",
          company_url: "https://www.mphasis.com//",
          logo_path: "mphasis-logo.jpeg",
          duration: "Oct 2021 - Current",
          location: "Hybrid",
          description:
            "Working on the Frontend (UI) part of software for the third largest Bank of United States of America. Along with Development, helping other team members to perform their task efficiently and on time.",
          color: "#0071C5",
        },
        {
          title: "Technical Business Head (Full Stack Developer)",
          company: "Libi Technologies Pvt Ltd",
          company_url: "http://www.libitech.in/",
          logo_path: "libi.png",
          duration: "Nov 2016 - Oct 2021",
          location: "Office",
          description:
            "I have worked on fully automated process in the company by implement several software such as ERP and CRM. Also, Worked on several projects for the benefit of company.",
          color: "#0071C5",
        },
        {
          title: "Senior Analyst (AR)",
          company: "Accretive Health India Pvt Ltd",
          company_url: "https://www.r1rcm.com/",
          logo_path: "r1.png",
          duration: "Aug 2015 - Nov 2016",
          location: "Office",
          description:
            "Data fetching, Analyzing, Forecasting and Reporting to onshore clients for future business expansion and resource allocations.",
          color: "#ee3c26",
        },
        {
          title: "Benefits Operations Administrator (BOA)",
          company: "Aon India Pvt Ltd",
          company_url: "https://www.aon.com/",
          logo_path: "aon.png",
          duration: "Jan 2012 - Aug 2015",
          location: "Office",
          description:
            "Fetch user history data from SQL to forecast future feature implementations for the client. Also, Technical hand holding to US based client's employees.",
          color: "#ee3c26",
        },
      ],
    },
    // {
    //   title: "Freelancing Experience",
    //   experiences: [
    //     {
    //       title: "Cross Winter of Code Mentor",
    //       company: "CWOC",
    //       company_url: "https://crosswoc.ieeedtu.in/",
    //       logo_path: "cwoc.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Campus Hustler",
    //       company: "Skillenza",
    //       company_url: "https://skillenza.com/",
    //       logo_path: "skillenza.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work from Home",
    //       description: "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
    //       color: "#196acf",
    //     },
    //     {
    //       title: "GitHub Student Developer",
    //       company: "GitHub",
    //       company_url: "https://github.com/",
    //       logo_path: "github.png",
    //       duration: "Nov 2019 - Present",
    //       location: "Work from Home",
    //       description:
    //       "Contribute to Open Source Community and Open Source Project.",
    //       color: "#040f26",
    //     },
    //     {
    //       title: "Google Local Guide",
    //       company: "Google Map",
    //       company_url: "https://maps.google.com/localguides/",
    //       logo_path: "localguide.png",
    //       duration: "Sep 2018 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "GDG Student Volunteer",
    //       company: "Google Developer Groups",
    //       company_url: "https://gdg.community.dev/",
    //       logo_path: "gdg.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Google Developer Group Surat Student Volunteer and Member.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "E. F. I. Student Volunteer",
    //       company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
    //       company_url: "https://indiaenvironment.org/",
    //       logo_path: "efi.png",
    //       duration: "Apr 2017 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
    //       color: "#5a900f",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "kumar.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "13",
      name: "Workport SAAS - Employees goals and performance management system",
      url: "https://www.workport.biz/",
      description:
        "Workport SAAS is an effective tool to monitor employee performance at all levels and boost productivity with timely intervention.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "mysql",
          iconifyClass: "logos-mysql",
        },
      ],
    },
    {
      id: "11",
      name: "GPS Daddy - GPS Tracking Software",
      // url: "https://erp.libitech.in/",
      description:
        "This is the complete gps tracking software for my company made with ReactJS, NodeJS, mysql, mongodb, Flutter, etc..",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "mysql",
          iconifyClass: "logos-mysql",
        },
        {
          name: "mongodb",
          iconifyClass: "simple-icons:mongodb",
        },
        {
          name: "flutter",
          iconifyClass: "logos-flutter",
        },
      ],
    },
    {
      id: "12",
      name: "GPS Talks - GPS Knowledge Center",
      url:
        "https://play.google.com/store/apps/details?id=com.gps_talks&hl=en&gl=US",
      description:
        "This is a kind of knowledge center/Sharing app helping dealer to aware about GPS tracking devices and let them share it with their community.",
      languages: [
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "mysql",
          iconifyClass: "logos-mysql",
        },
        {
          name: "flutter",
          iconifyClass: "logos-flutter",
        },
      ],
    },
    {
      id: "0",
      name: "Libicon - Complete ERP solution",
      url: "https://erp.libitech.in/",
      description:
        "This is complete ERP solution for my company made with ReactJS and NodeJS.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "mysql",
          iconifyClass: "logos-mysql",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "1",
      name: "Weather App",
      url: "https://kumar-weather-web-application.herokuapp.com/",
      description:
        "This is a Weather app. This can show weather update of current location extracting current location. One can search for a city name and get weather update of this specific location.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "3",
      name: "My Blogging Site - Why Not Google It",
      url: "https://whynotgoogleit.com/",
      description:
        "My own Blogging site using Wordpress. Here you can find the analysis on different topics, experience, reviews and technical tutorials.",
      languages: [
        {
          name: "wordpress",
          iconifyClass: "logos-wordpress",
        },
      ],
    },
    {
      id: "4",
      name: "node_express_task-manager--api",
      url: "https://github.com/libi-technologies-pvt-ltd/task-manager--api",
      description: "Simple NodeJS Express CRUD Operations API starter.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "5",
      name: "Picture-Gallery",
      url: "https://picturegallery.netlify.app/",
      description:
        "A Small picture gallary app made with react fetching data from unsplash API. It is hosted on Git Hub and Netlify.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "6",
      name: "Video-Gallery",
      url: "https://videogallery.netlify.app/",
      description:
        "A Small video gallary app like youtube made with react fetching data using youtube API. It is hosted on Git Hub and Netlify.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "7",
      name: "Roomify - Online Hotel Booking App ",
      url: "https://roomify.netlify.app/",
      description:
        "A online hotel booking web application design using SASS, which is hosted on Netify.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
      ],
    },
    {
      id: "8",
      name: "Common Room Chat App",
      url: "https://kumar-chat-app.herokuapp.com/",
      description: "Common room Chat App Using Socket.io and hosted on heroku",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "9",
      name: "Blog Site Design",
      url: "https://kumar-blog.netlify.app/",
      description: "A Simple Blog Web front end design using HTML and CSS",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "10",
      name: "Covid Products Website",
      url: "https://greatwill.netlify.app/",
      description:
        "A simple single page static website related to Covid-19 products. this is reasponsive as well with aria theme.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  blogs,
  blogSection,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
