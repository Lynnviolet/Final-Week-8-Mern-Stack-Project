# Final-Week-8-Mern-Stack-Project
# 🏋️‍♀️ FitTrack – Fitness and Health Tracking App

FitTrack is a full-featured MERN Stack web application designed to help users track their fitness progress, nutrition, workouts, and goals. It offers real-time updates, personalized dashboards, reminders, and optional social engagement features.

## 🌐 Live Demo
- Frontend: [https://fittrack-client.vercel.app](https://fittrack-client.vercel.app)
- Backend API: [https://fittrack-api.onrender.com/api](https://fittrack-api.onrender.com/api)

---

## 🧰 Tech Stack

### 🚀 Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM
- Socket.io-client

### 🛠 Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Socket.io
- JWT Authentication
- Express-Validator
- Multer (for profile/image uploads)

### 🧪 Testing
- Jest
- React Testing Library
- Supertest
- Cypress (for E2E)

### 📦 DevOps & Deployment
- GitHub Actions (CI/CD)
- Vercel (Frontend Hosting)
- Render (Backend Hosting)
- MongoDB Atlas (Database)
- Postman (API testing)
- UptimeRobot + LogRocket (Monitoring)

---

## 📚 Features

### ✅ Core Features
- User Authentication (JWT + hashed passwords)
- Workout and Nutrition Log
- Track Weight, Goals, and Progress
- Realtime Dashboard
- Optional Social Feed & Comments
- Daily Reminders via Notifications

### ⚙️ Admin Features
- Manage Users
- Monitor Metrics
- Delete Inappropriate Posts

### 🔒 Protected Routes
- Only authenticated users can access dashboards, logs, and personal data.

---

## 📁 Folder Structure

### Backend (`/server`)
server/
│
├── config/ # DB connection & environment
├── controllers/ # Logic for routes
├── middleware/ # Auth, validation, error handling
├── models/ # Mongoose models
├── routes/ # API endpoints
├── tests/ # Unit/integration tests
└── app.js # Express setup




### Frontend (`/client`)
client/
│
├── components/ # Reusable UI elements
├── pages/ # Main pages (Home, Login, Dashboard, etc.)
├── services/ # Axios calls
├── context/ # Auth context
├── tests/ # Component tests
└── App.jsx # Main routing & layout



## 🚦 API Documentation

### Base URL:
https://fittrack-api.onrender.com/api


### Example Endpoints:

#### 🔐 Auth
- `POST /auth/register` – Register new user
- `POST /auth/login` – Login existing user
- `GET /auth/me` – Get current logged-in user

#### 🏃 Workouts
- `GET /workouts` – Get all workouts
- `POST /workouts` – Add workout
- `PUT /workouts/:id` – Update workout
- `DELETE /workouts/:id` – Delete workout

#### 🥗 Nutrition
- `GET /nutrition`
- `POST /nutrition`

#### 📈 Progress
- `GET /progress`
- `POST /progress`

---

## 🧪 Testing Guide

### Backend:
```bash
cd server
npm run test
Frontend:
bash
Copy
Edit
cd client
npm run test
E2E (Cypress):
bash
Copy
Edit
npx cypress open
⚙️ CI/CD – GitHub Actions
On push to main, automated tests and build are triggered.

If all tests pass, deployment to Vercel (client) and Render (API) proceeds.

Workflow config: .github/workflows/deploy.yml

🧑‍💻 Setup Instructions
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/fittrack.git
Backend Setup

bash
Copy
Edit
cd server
npm install
npm run dev
Add a .env file with:

env
Copy
Edit
PORT=5000
MONGO_URI=your-mongodb-atlas-uri
JWT_SECRET=your-secret
Frontend Setup

bash
Copy
Edit
cd client
npm install
npm start
📖 User Guide
Register / Login

Track your workouts & nutrition

View progress charts

Join community feed 

Set goals & reminders

Logout securely

🏗 Technical Architecture
See Technical_Architecture.pdf and System_Diagram.png for a complete breakdown.

🎓 Project Roadmap
Milestone	Description	Status
✅ Task 1	Plan architecture, models, endpoints	Complete
✅ Task 2	Build backend API	Complete
✅ Task 3	Build frontend UI	Complete
✅ Task 4	Testing & QA	Complete
✅ Task 5	Deployment & Docs	Complete
🟩 Bonus	Mobile support, advanced analytics	Planned

🎨 Screenshots
<img src="docs/dashboard-preview.png" width="600" /> <img src="docs/mobile-view.png" width="300" />
📊 Credits
Developed by: Lynn Violet Kimotho

Stack: MERN | 2025 Capstone Project

 Power Learn Academy

