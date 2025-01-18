# Harsha Portfolio

A personal portfolio website showcasing my skills, projects, education, experience, and coding profiles. This project uses React and Tailwind CSS for the frontend, and it is containerized using Docker for development and production.

---

## 🚀 Features

- **Responsive Design**: Optimized for various devices and screen sizes.
- **Interactive Sections**: Includes Hero section, About, Skills, Projects, Experience, and Contact.
- **Dynamic Theming**: Supports themes managed via a central configuration.
- **Dockerized**: Includes configurations for development and production environments using Docker.
- **Tailwind CSS**: Styled with utility-first CSS for modern and clean designs.

---

## 🗂️ Directory Structure

```plaintext
└── Harsha_Portfolio/
    ├── README.md                      # Documentation for the project
    ├── Dockerfile.dev                 # Docker configuration for development environment
    ├── Dockerfile.prod                # Docker configuration for production environment
    ├── docker-compose.dev.yaml        # Docker Compose configuration for development
    ├── docker-compose.prod.yaml       # Docker Compose configuration for production
    ├── index.css                      # Global CSS styles applied across the app
    ├── package.json                   # NPM configuration file listing dependencies and scripts
    ├── tailwind.config.js             # Configuration for Tailwind CSS utility framework
    ├── .dockerignore                  # Specifies files to ignore during Docker builds
    ├── public/
    │   ├── _redirects                 # Netlify configuration for handling route redirects
    │   └── index.html                 # The main HTML file used as the entry point for the app
    └── src/
        ├── App.css                    # CSS specific to the App component
        ├── App.js                     # Main React component that organizes the app structure
        ├── index.js                   # Entry point for the React application
        ├── components/
        │   ├── About/
        │   │   ├── About.jsx          # React component for the "About" section of the portfolio
        │   │   └── AboutStyle.js      # Styled components for About section
        │   ├── CodingProfiles/
        │   │   ├── CodingProfiles.jsx # React component displaying coding profile links
        │   │   ├── CodingProfilesData.js  # Data for coding profiles (e.g., links, usernames)
        │   │   └── CodingProfilesStyle.js # Styled components for CodingProfiles
        │   ├── Contact/
        │   │   ├── Contact.jsx        # React component for the "Contact" section of the portfolio
        │   │   └── ContactStyle.js    # Styled components for Contact section
        │   ├── Education/
        │   │   ├── Education.jsx      # React component for the "Education" section of the portfolio
        │   │   ├── EducationCard.jsx  # Component for individual education cards
        │   │   ├── EducationCardStyle.js  # Styled components for EducationCard
        │   │   ├── EducationData.js   # Data related to educational qualifications
        │   │   └── EducationStyle.js  # Styled components for Education section
        │   ├── Experience/
        │   │   ├── Experience.jsx     # React component for the "Experience" section
        │   │   ├── ExperienceCard.jsx # Component for individual experience cards
        │   │   ├── ExperienceCardStyle.js # Styled components for ExperienceCard
        │   │   ├── ExperienceData.js  # Data related to work experience
        │   │   └── ExperienceStyle.js # Styled components for Experience section
        │   ├── Footer/
        │   │   ├── Footer.jsx         # Footer component for the portfolio
        │   │   └── FooterStyle.js     # Styled components for Footer
        │   ├── HeroSection/
        │   │   ├── HeroSection.jsx    # React component for the "Hero" or introductory section
        │   │   ├── HeroSectionData.js # Data for HeroSection (e.g., tagline, heading)
        │   │   └── HeroStyle.js       # Styled components for HeroSection
        │   ├── Navbar/
        │   │   ├── Navbar.jsx         # Navigation bar component
        │   │   └── NavbarStyle.js     # Styled components for Navbar
        │   ├── Projects/
        │   │   ├── ProjectCards.jsx   # Component for individual project cards
        │   │   ├── ProjectCardsStyle.js  # Styled components for ProjectCards
        │   │   ├── ProjectDetails.jsx # Detailed project descriptions
        │   │   ├── ProjectDetailsStyle.js # Styled components for ProjectDetails
        │   │   ├── Projects.jsx       # React component for the "Projects" section
        │   │   ├── ProjectsData.js    # Data for projects (e.g., titles, descriptions, links)
        │   │   └── ProjectsStyle.js   # Styled components for Projects section
        │   └── Skills/
        │       ├── Skills.jsx         # React component for the "Skills" section
        │       ├── SkillsData.js      # Data for skills (e.g., names, proficiency levels)
        │       └── SkillsStyle.js     # Styled components for Skills component
        ├── images/                    # Images required for the portfolio
        │   
        └── themes/
            └── Themes.js              # Theme configuration and utilities (e.g., dark/light mode)
```

## 🛠️ Installation and Setup

## Prerequisites

- Node.js and npm
- Docker and Docker Compose

## Clone the Repository

```bash
git clone https://github.com/saisriharsha2003/Harsha_Portfolio.git
cd Harsha_Portfolio
```

## Install Dependencies

```bash
npm install
```

## Start the Development Server

```bash
npm start
```

## Dockerized Devlopment Setup

Build and start the containers:

```bash
docker-compose -f docker-compose.dev.yaml up --build
```

Access the app in your browser at http://localhost:3000.

## 🐳 Docker Deployment

## Development Build

```bash
docker-compose -f docker-compose.dev.yaml up --build
```

## Production Build

```bash
docker-compose -f docker-compose.prod.yaml up --build
```


