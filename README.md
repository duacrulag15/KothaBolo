
# KothaBolo - Real-time Chat Application

<div align="center">

**A modern, feature-rich real-time chat application built with the MERN stack**

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![Status](https://img.shields.io/badge/status-Active-brightgreen)

[Features](#features) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [Installation](#installation) • [Usage](#usage)

</div>

---

## 🎯 About KothaBolo

KothaBolo is a fully-functional real-time chat application that enables instant messaging between users. Built with cutting-edge web technologies, it provides a seamless communication experience with features like group chats, user authentication, and live notifications.

**"KothaBolo"** means "Speak Here" in Bengali, emphasizing our mission to enable meaningful conversations.

---

## ✨ Features

- **🔐 Secure Authentication** - JWT-based user authentication with encrypted passwords
- **💬 Real-time Messaging** - Instant message delivery using Socket.io
- **👥 Group Chats** - Create and manage group conversations with multiple users
- **🔔 Live Notifications** - Get notified of new messages instantly
- **🌙 Dark Mode** - Toggle between light and dark themes
- **🎨 Modern UI** - Beautiful, responsive interface built with Chakra UI
- **👤 User Profiles** - Customize your profile with avatar and information
- **🔍 User Search** - Find and connect with other users easily
- **📱 Mobile Responsive** - Works seamlessly on all devices

---

## 🏗️ Tech Stack

### Frontend
- **React.js** - UI library for building interactive components
- **Chakra UI** - Modern component library for styling
- **Socket.io-client** - Real-time bidirectional communication
- **Axios** - HTTP client for API requests
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for REST APIs
- **Socket.io** - Real-time event-driven communication
- **JWT** - Secure token-based authentication
- **Bcryptjs** - Password encryption and hashing

### Database
- **MongoDB Atlas** - Cloud NoSQL database
- **Mongoose** - MongoDB object modeling

---

## 🚀 Live Demo

**Coming Soon** - Deploy link will be added here

---

## 📋 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/kothbolo.git
cd kothbolo
```

2. **Install backend dependencies**
```bash
npm install
```

3. **Install frontend dependencies**
```bash
cd frontend
npm install --legacy-peer-deps
cd ..
```

4. **Set up environment variables**

Create a `.env` file in the root directory:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/kothbolo?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
NODE_ENV=development
```

5. **Start the application**

Terminal 1 - Backend:
```bash
npm run server
```

Terminal 2 - Frontend:
```bash
cd frontend
npm start
```

Visit `http://localhost:3000` in your browser.

---

## 📖 Usage

### Creating an Account
1. Navigate to the signup page
2. Enter your details (name, email, password)
3. Upload a profile picture (optional)
4. Sign up

### Logging In
1. Enter your email and password
2. Click "Login" or use guest credentials to test

### Starting a Chat
1. Use the search bar to find users
2. Click on a user to start a private conversation
3. Or create a group chat with multiple users

### Group Chat Features
- Create new group chats
- Add/remove members
- Rename group chats
- Leave groups

### Dark Mode
- Toggle dark/light mode using the button in the header

---

## 🔒 Security Features

- Passwords are encrypted using **Bcryptjs**
- JWT tokens for secure authentication
- Protected API endpoints with authorization
- Secure database connection with MongoDB Atlas

---

## 📦 Project Structure

```
kothbolo/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── config/
│   │   └── App.js
│   └── package.json
└── .env
```

---

## 🎨 Customization

KothaBolo features a customizable design system:

### Color Palette
- **Primary**: Teal (#10A37F) - Brand color
- **Secondary**: Pink (#EC4899) - Accent color
- **Dark**: Deep Blue (#0F172A)

### Theme
- Light and Dark modes with smooth transitions
- Responsive design that works on all screen sizes

---

## 🚀 Deployment

The application can be deployed to:
- **Frontend**: Vercel, Netlify
- **Backend**: Railway, Render, Heroku
- **Database**: MongoDB Atlas (included)

Deployment guides coming soon!

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 👤 Author

**Imtiaz Morshed Adnan**

Feel free to reach out for any questions or suggestions!

---

## 🙏 Acknowledgments

- Built as a full-stack MERN project
- Inspired by modern chat applications
- Uses Socket.io for real-time communication

---

<div align="center">

**Made with ❤️ by Imtiaz Morshed Adnan**

[⬆ Back to Top](#kothbolo---real-time-chat-application)

</div>

```bash
  //open now terminal
  cd frontend
  npm start
```

  
# Features

### Authenticaton
![](https://github.com/piyush-eon/mern-chat-app/blob/master/screenshots/login.PNG)
![](https://github.com/piyush-eon/mern-chat-app/blob/master/screenshots/signup.PNG)
### Real Time Chatting with Typing indicators
![](https://github.com/piyush-eon/mern-chat-app/blob/master/screenshots/real-time.PNG)
### One to One chat
![](https://github.com/piyush-eon/mern-chat-app/blob/master/screenshots/mainscreen.PNG)
### Search Users
![](https://github.com/piyush-eon/mern-chat-app/blob/master/screenshots/search.PNG)
### Create Group Chats
![](https://github.com/piyush-eon/mern-chat-app/blob/master/screenshots/new%20grp.PNG)
### Notifications 
![](https://github.com/piyush-eon/mern-chat-app/blob/master/screenshots/group%20%2B%20notif.PNG)
### Add or Remove users from group
![](https://github.com/piyush-eon/mern-chat-app/blob/master/screenshots/add%20rem.PNG)
### View Other user Profile
![](https://github.com/piyush-eon/mern-chat-app/blob/master/screenshots/profile.PNG)
## Made By

- [@Piyush-eon](https://github.com/piyush-eon)

  
