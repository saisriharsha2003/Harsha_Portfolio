import empower_recruit from "../../images/empwer-recruit.png";
import todo from "../../images/todolist.jpg";
import foodbot from "../../images/whatsappbot.webp";
import portfolio from "../../images/portfolio.webp";
import netflix from "../../images/netflix.png";
import virtual_assistant from "../../images/virtual_assistant.webp";
import notenexus from "../../images/note_nexus.jpg"


export const projects = [
    {
      id: 0,
      title: "EmpowerRecruit",
      description:
        "Created EmpowerRecruit, a game-changing recruitment platform using cutting-edge tech. Led frontend design with React.js, ensuring a responsive interface, while Node.js powered backend operations. Used Tailwind CSS for sleek styling, enhancing user experience. Integrated Twilio for real-time notifications, reducing response time for application status updates. Leveraged Express.js for efficient server maintenance. Employed advanced NLP for accurate resume parsing and job role generation, boosting efficiency. Provided personalized job recommendations based on user skills, increasing engagement. Streamlined job listing and candidate shortlisting, reducing recruiter workload. Implemented job parsing and candidate compatibility scoring, sorting applications based on recruiter needs.",
      image: empower_recruit,
      tags: [
        "React Js",
        "TailwindCSS",
        "Node Js",
        "Express Js",
        "JavaScirpt",
        "Twilio API",
        "MongoDB",
        "Natural Language Processing",
        "Python",
        "Machine Learning",
        "OpenAI"
      ],
      category: "web app",
      github: "https://github.com/saisriharsha2003/EmpowerRecruitUpdated",
      webapp: "https://final-year-project-client-five.vercel.app/",
    },
    {
      id: 2,
      title: "VoiceOps Assistant",
      description:
        "Created VoiceOps Assistant, a Python-based virtual assistant with advanced voice recognition for user authentication, reducing unauthorized access risk. Achieved high speech recognition accuracy using Google's text-to-speech API, Selenium, and Beautifulsoup for web scraping, and implemented automated web browsing through voice commands. Orchestrated functionalities including sending WhatsApp messages and playing YouTube videos with voice commands, significantly reducing task completion time. Introduced Natural Language Processing and Machine Learning algorithms to enhance speech-to-text functionality and provide precise language translation.",
      image: virtual_assistant,
      tags: [
        "Python",
        "Artificial Intelligence",
        "Machine Learning",
        "Speech Recognition",
        "Natural Language Processing",
        "Selenium",
        "Voice Recognition",
        
      ],
      category: "machine learning",
      github: "https://github.com/saisriharsha2003/VoiceOpsAssistant.git",
      
    },
    {
      id: 3,
      title: "WhatsAppFoodBot",
      description:
        "Deployed a Python based WhatsApp bot with integrated Twilio API, Django, and MongoDB, optimizing customer requests and reducing response time. Ensured a streamlined food ordering experience exclusively through WhatsApp using this bot, eliminating the need for additional food delivery apps, while maintaining comprehensive test coverage across various scenarios and functions. Assessed customer satisfaction before and after implementation, showing a significant improvement. Analyzed customer interactions, resulting in an increase in engagement and frequency of interaction.",
      image: foodbot,
      tags: ["Python", "Flask", "Django", "MongoDB", "Twilio"],
      category: "chat bot",
      github: "https://github.com/saisriharsha2003/WhatsAppFoodBot",
    },
    {
      id: 4,
      title: "Responsive ReactJS Portfolio",
      description:
        "Created a responsive portfolio website using ReactJS, showcasing skills, projects, and achievements in a visually appealing and user-friendly manner. The portfolio features a modern design with smooth animations and transitions, providing an engaging user experience across desktop, tablet, and mobile devices. Implemented features include a dynamic project gallery, interactive skill charts, and a contact form for inquiries. The responsive ReactJS portfolio demonstrates a strong proficiency in front-end development and design principles.",
      image: portfolio,
      tags: ["HTML", "CSS", "JavaScript", "ReactJS", "TailwindCSS"],
      category: "web app",
      github: "https://github.com/saisriharsha2003/Harsha_Portfolio",
      webapp: "https://saisriharsha-portfolio.netlify.app/",
    },
    {
      id: 1,
      title: "NoteNexus",
      description:
        "NoteNexus is a cloud-based collaborative note-taking app designed to enable seamless real-time collaboration between users. Whether for study groups, team projects, or group brainstorming sessions, NoteNexus makes it easy to collaboratively create, edit, and organize notes. The app offers a streamlined, user-friendly interface that promotes efficient teamwork and knowledge sharing, allowing users to contribute to and modify shared notes without any hassle.",
      image: notenexus,
      tags: [
        "React Js",
        "TailwindCSS",
        "Node Js",
        "Express Js",
        "JavaScirpt",
        "MongoDB"
      ],
      category: "web app",
      github: "https://github.com/saisriharsha2003/note-nexus",
      webapp: "https://notenex.netlify.app/",
    },
    
    {
      id: 6,
      title: "Dynamic To Do List",
      description:
        "Designed and developed a dynamic to-do list application, offering users a digital task management solution with enhanced features for organization and productivity. The application allows users to create, update, and manage tasks, prioritize them based on importance and deadlines, and categorize tasks into projects for efficient management. Implemented features include task reminders, notifications, and collaboration tools, enabling users to stay organized and on track with their tasks. The dynamic to-do list application provides a user-friendly interface and seamless integration with other productivity tools for a comprehensive task management experience.",
      image: todo,
      tags: ["HTML", "CSS", "JavaScript"],
      category: "web app",
      github: "https://github.com/saisriharsha2003/To_Do_List",
      webapp: "https://saisriharsha2003.github.io/To_Do_List/",
    },
    {
      id: 5,
      title: "Netflix Landing Page",
      description:
        "Developed a landing page concept for Netflix, focusing on user engagement and content discovery. The landing page design emphasized intuitive navigation, personalized content recommendations, and a visually appealing layout to captivate users. Integrated features included a responsive design for seamless viewing across devices, interactive elements for enhanced user interaction, and optimized performance for fast loading times. The Netflix landing page concept aimed to enhance the user experience and drive engagement with the platform's content.",
      image: netflix,
      tags: ["HTML", "CSS", "JavaScript"],
      category: "web app",
      github: "https://github.com/saisriharsha2003/Harsha_Netflix_landing_page",
      webapp: "https://saisriharsha2003.github.io/Harsha_Netflix_landing_page/"
    },
    
  ];