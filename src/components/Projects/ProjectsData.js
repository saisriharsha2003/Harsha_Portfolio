import empower_recruit from "../../images/empwer-recruit.png";
import todo from "../../images/todolist.jpg";
import foodbot from "../../images/whatsappbot.webp";
import portfolio from "../../images/portfolio.webp";
import netflix from "../../images/netflix.png";
import virtual_assistant from "../../images/virtual_assistant.webp";
import notenexus from "../../images/note_nexus.jpg"
import smartbill from "../../images/smartbill.jpg"

export const projects = [
    {
      id: 0,
      title: "EmpowerRecruit",
      description:
      "EmpowerRecruit is a comprehensive recruitment platform built using the MERN stack, designed to streamline the hiring process for colleges, students, and recruiters. Recruiters can post jobs with job parsing for automated field entry, choose between global or college-specific postings, and utilize a job compatibility score to rank applicants. They can accept or reject applications, with status updates sent via email. Students can apply for jobs using resume parsing for seamless form filling, check their compatibility scores for job descriptions, and track their application statuses. Colleges can manage placement activities, approve drives, track placement statistics, handle student data, and coordinate with recruiters to optimize placement outcomes. Empower Recruit enhances efficiency, transparency, and engagement in the hiring process.",
      image: empower_recruit,
      tags: [
        "React Js",
        "TailwindCSS",
        "Node Js",
        "Express Js",
        "JavaScirpt",
        "Twilio API",
        "MongoDB",
        "NLP",
        "Python",
        "Machine Learning",
        "OpenAI"
      ],
      category: "web app",
      github: "https://github.com/saisriharsha2003/EmpowerRecruitUpdated",
      webapp: "https://final-year-project-client-five.vercel.app/",
    },
    {
      id: 1,
      title: "VoiceOps Assistant",
      description:
        "Created VoiceOps Assistant, a Python-based virtual assistant with advanced voice recognition for user authentication, reducing unauthorized access risk. Achieved high speech recognition accuracy using Google's text-to-speech API, Selenium, and Beautifulsoup for web scraping, and implemented automated web browsing through voice commands. Orchestrated functionalities including sending WhatsApp messages and playing YouTube videos with voice commands, significantly reducing task completion time. Introduced NLP and Machine Learning algorithms to enhance speech-to-text functionality and provide precise language translation.",
      image: virtual_assistant,
      tags: [
        "Python",
        "Artificial Intelligence",
        "Machine Learning",
        "Speech Recognition",
        "NLP",
        "Selenium",
        "Voice Recognition",
        
      ],
      category: "machine learning",
      github: "https://github.com/saisriharsha2003/VoiceOpsAssistant.git",
      
    },
    {
      id: 2,
      title: "WhatsAppFoodBot",
      description:
      "WhatsAppFoodBot is an innovative chatbot-based food ordering system that allows users to place orders directly through WhatsApp without the need for a separate application. It provides an interactive menu, enabling customers to browse available dishes and order seamlessly from any restaurant associated with the chatbot. One of its key features is direct communication with restaurants, eliminating the need for middlemen and ensuring a more efficient ordering experience. Users can inquire about food options, pricing, and availability, making the process more personalized and convenient. The chatbot streamlines food ordering by integrating with multiple restaurants, enhancing accessibility and user experience.",
      image: foodbot,
      tags: ["Python", "Flask", "Django", "MongoDB", "Twilio"],
      category: "chat bot",
      github: "https://github.com/saisriharsha2003/WhatsAppFoodBot",
    },
    {
      id: 3,
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
      id: 4,
      title: "SmartBill",
      description:
      "SmartBill is a powerful and efficient power bill management application. It streamlines the billing process and enhances communication between consumers and administrators. The application features two user roles: Admin and Consumer. Admins can add bills to a specific meter number, view and manage all registered customers, and resolve complaints raised by consumers. Consumers can pay their electricity bills, register multiple users under the same meter number, raise complaints, and track their status. Additionally, consumers can view their billing history and complaint records, ensuring transparency and ease of access. SmartBill simplifies power bill management by providing an organized and user-friendly platform for both administrators and consumers.",
      image: smartbill,
      tags: [
        "JSP",
        "Servlets",
        "JDBC",
        "Maven",
        "Java",
        "Apache Tomcat",
        "MYSQL"
      ],
      category: "java web app",
      github: "https://github.com/saisriharsha2003/SmartBillWeb_Maven",
    },
    {
      id: 5,
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
      id: 7,
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