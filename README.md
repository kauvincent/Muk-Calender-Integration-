MAKERERE UNIVERSITY CALENDER INTEGRATION 

A seamless full-stack web application designed to integrate Makerere University student timetables directly into personal calendar applications (Google Calendar, Outlook, Apple Calendar) via dynamic iCalendar (`.ICS`) subscription feeds.

This system provides a mocked frontend experience mirroring the Makerere portal, streamlining the scheduling experience for students.

FEATURES

Generates dynamic .ics calendar feeds that users can subscribe to in real time.
Combines the React frontend and Express backend to run on a single port, making deployment simpler and avoiding CORS issues.
Uses weekly mock data that automatically updates based on the current week, so schedules stay relevant during demos and presentations.
Designed to work with PostgreSQL, but can fall back to an in-memory setup if a database isn’t available, making local development easier.

TECH STACK

Frontend: React 19, Vite, Tailwind CSS v4, Lucide React (JavaScript/JSX)
Backend: Node.js, Express
Database: PostgreSQL (pg), with in-memory fallback for development


├── backend/                  Server-side environment
│   ├── database/             PostgreSQL connection and fallbacks
│   ├── middleware/           Express middleware 
│   ├── repositories/         Data access layer 
│   ├── routes/               API route definitions
│   ├── services/             Core business logic 
│   ├── utils/                Helpers
│   └── server.js             Main Express entry point
├── src/                      Client-side React environment
│   ├── components/           Reusable UI components
│   ├── hooks/                Custom React hooks
│   ├── pages/                Page views 
│   ├── App.jsx               Main React component
│   └── main.jsx              Vite frontend entry point
├── package.json              Node dependencies and scripts
└── vite.config.js            Vite bundler configuration

