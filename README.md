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
saisriharsha2003-Harsha_Portfolio/
├── README.md
├── Dockerfile.dev                # Docker configuration for development
├── Dockerfile.prod               # Docker configuration for production
├── docker-compose.dev.yaml       # Docker Compose for development
├── docker-compose.prod.yaml      # Docker Compose for production
├── index.css                     # Global styles
├── package.json                  # NPM configuration and dependencies
├── tailwind.config.js            # Tailwind CSS configuration
├── .dockerignore                 # Files to exclude from Docker builds
├── public/                       # Static public assets
│   ├── _redirects                # Netlify redirect configuration
│   └── index.html                # Root HTML file
└── src/                          # React source files
    ├── App.css                   # App-specific styles
    ├── App.js                    # Main React component
    ├── index.js                  # Entry point of the React app
    ├── components/               # React components
    │   ├── About/
    │   │   ├── AboutStyle.js
    │   │   └── index.js
    │   ├── Cards/
    │   │   ├── EducationCard.jsx
    │   │   ├── ExperienceCard.jsx
    │   │   └── ProjectCards.jsx
    │   ├── CodingProfiles/
    │   │   └── index.js
    │   ├── Contact/
    │   │   └── index.js
    │   ├── Education/
    │   │   └── index.js
    │   ├── Experience/
    │   │   └── index.js
    │   ├── Footer/
    │   │   └── index.js
    │   ├── HeroSection/
    │   │   ├── HeroStyle.js
    │   │   └── index.js
    │   ├── Navbar/
    │   │   ├── NavbarStyledComponent.js
    │   │   └── index.js
    │   ├── ProjectDetails/
    │   │   └── index.jsx
    │   ├── Projects/
    │   │   ├── ProjectsStyle.js
    │   │   └── index.js
    │   └── Skills/
    │       └── index.js
    ├── data/                      # Data constants for the app
    │   └── constants.js
    ├── images/                    # Static images
    │   ├── colab_logo.webp
    │   ├── git.webp
    │   ├── nodejs.webp
    │   ├── portfolio.webp
    │   ├── servletslogo.webp
    │   ├── solomons.webp
    │   ├── virtual_assistant.webp
    │   └── whatsappbot.webp
    ├── themes/                    # Theme configuration
    │   └── default.js
    └── utils/                     # Utility functions
        └── Themes.js
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


