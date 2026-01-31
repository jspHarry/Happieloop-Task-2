🚀 TASK MANAGEMENT DASHBOARD
A Clean, Full-Stack To-Do System with Real-Time CRUD Operations

A modern, responsive task management application that lets users create, update, track, and delete tasks seamlessly. Built with a Node.js + Express + MongoDB backend and a lightweight, elegant frontend, this project demonstrates full-stack development best practices with a focus on clarity, usability, and performance.

✨ Key Highlights

✅ Full CRUD functionality
✅ RESTful API architecture
✅ MongoDB database integration
✅ Clean and responsive UI
✅ Status tracking (Pending / In Progress / Completed)
✅ Edit-in-place workflow
✅ Secure & scalable structure
✅ Beginner-friendly and easy to extend

🧠 Project Overview

The Task Management Dashboard is designed to simplify task organization. Users can:

Add new tasks

Edit existing tasks

Change task statuses

Delete tasks

View timestamps for each task

The application follows a client-server architecture, ensuring separation of concerns and scalability.

🛠 Tech Stack
🔹 Frontend

HTML5

CSS3

Vanilla JavaScript

Google Fonts (Inter)

🔹 Backend

Node.js

Express.js

MongoDB

Mongoose ODM

CORS Middleware

📁 Project Structure
Task 2/
│
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── tasks.js
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── app.js
    └── index.html

⚙️ Features
📝 Task Creation

Add title, description, and status

Input validation for required fields

✏️ Task Editing

Load existing task into the form

Update instantly with smooth UI flow

🔄 Status Management

Change task status with one click:

Pending

In Progress

Completed

🗑 Task Deletion

Confirmation before removal

Instant UI refresh

🕒 Timestamp Tracking

Each task shows creation date & time

🔌 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
GET	/api/tasks/:id	Get a single task
POST	/api/tasks	Create new task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
🚀 Installation & Setup
1️⃣ Clone the Repository
git clone <repository-url>
cd Task-Management-Dashboard

2️⃣ Backend Setup
cd backend
npm install
node server.js


Server runs on:

http://localhost:5000

3️⃣ Frontend Setup

Simply open:

frontend/index.html


in your browser.

🔐 Environment Variables (Recommended)

For security, store your MongoDB URI in a .env file:

MONGO_URI=your_mongodb_connection_string


Update server.js to use:

process.env.MONGO_URI

🎨 UI Design Principles

Minimalistic layout

Soft color palette

Clear typography

Responsive structure

Smooth user interactions

🔮 Future Enhancements

User authentication

Search & filter functionality

Drag-and-drop task sorting

Due dates & reminders

Dark mode support

Deployment (Render / Vercel / Netlify)

🤝 Contribution Guidelines

Contributions are welcome!

Fork the repository

Create a feature branch

Commit your changes

Submit a pull request
