# KothaBolo Frontend

This is the frontend for the **KothaBolo** real-time chat application, built with React and Chakra UI.

## 🎯 Overview

The frontend provides a modern, responsive user interface for the KothaBolo chat application. It handles user authentication, real-time messaging via Socket.io, group chat management, and a beautiful dark/light theme system.

## 🛠️ Technologies Used

- **React.js** (v17.0.2) - UI library
- **Chakra UI** (v1.6.2) - Component library and theming
- **Socket.io-client** - Real-time bidirectional communication
- **Axios** - HTTP client for API requests
- **React Router** - Client-side routing
- **JavaScript (ES6+)** - Programming language

## 📁 Project Structure

```
src/
├── components/
│   ├── Authentication/
│   │   ├── Login.js
│   │   └── Signup.js
│   ├── miscellaneous/
│   │   ├── SideDrawer.js
│   │   ├── GroupChatModal.js
│   │   ├── UpdateGroupChatModal.js
│   │   ├── ProfileModal.js
│   │   └── ThemeToggle.js (Dark mode)
│   ├── userAvatar/
│   │   ├── UserListItem.js
│   │   └── UserBadgeItem.js
│   ├── Chatbox.js
│   ├── ChatLoading.js
│   ├── MyChats.js
│   ├── ScrollableChat.js
│   ├── SingleChat.js
│   └── styles.css
├── Pages/
│   ├── Homepage.js
│   └── Chatpage.js
├── Context/
│   └── ChatProvider.js (Global state management)
├── config/
│   ├── ChatLogics.js
│   └── theme.js (Chakra UI custom theme)
├── data/
│   └── messages.js
├── App.js
├── App.css
├── index.js
└── index.css
```

## 🎨 Design System

### Color Palette
- **Primary (Teal)**: `#10A37F` - Brand color used throughout the app
- **Secondary (Pink)**: `#EC4899` - Accent color for highlights
- **Dark Theme**: `#0F172A` - Deep blue for dark backgrounds
- **Light Theme**: `#F8FAFC` - Light backgrounds

### Typography
- **Font Family**: Work Sans (weights: 300, 400, 600, 700)
- **Headings**: Bold with proper hierarchy (h1-h6)
- **Body Text**: Regular weight (400) for readability

### Features
- **Dark Mode Toggle** - Switch between light and dark themes
- **Smooth Animations** - Slide-up, fade-in, and pulse animations
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Custom Scrollbars** - Themed with teal color (#10A37F)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn
- Backend server running on `http://localhost:5000`

### Installation

1. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

2. **Start development server**
```bash
npm start
```

The app will open at `http://localhost:3000`

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`
**Note: this is a one-way operation. Once you eject, you can't go back!**

## 🔌 API Integration

The frontend communicates with the backend API at `http://localhost:5000`

### Key Endpoints Used:
- **POST** `/api/user/login` - User login
- **POST** `/api/user/signup` - User registration
- **GET** `/api/user` - Fetch all users
- **GET** `/api/chat` - Fetch user's chats
- **POST** `/api/chat` - Create new chat
- **GET** `/api/message/:chatId` - Fetch messages in a chat
- **POST** `/api/message` - Send a message

## 🔌 Socket.io Events

Real-time communication uses Socket.io with these key events:

- `connection` - Establish socket connection
- `setup` - Send user info to server
- `join chat` - Join a specific chat room
- `message received` - Listen for new messages
- `typing` - Emit when user is typing
- `stop typing` - Emit when user stops typing

## 🌙 Dark Mode

The app includes a built-in dark mode toggle:
- Located in the header/navigation
- Uses Chakra UI's `useColorMode` hook
- All components are styled to support both modes
- User preference is automatically applied across the app

## 📝 Component Features

### Authentication
- User signup with email validation
- Secure password hashing
- JWT-based login
- Protected routes

### Chat Management
- Create one-on-one chats
- Create group chats
- Search for users
- View chat history

### Real-time Messaging
- Send and receive messages instantly
- See typing indicators
- Message timestamps
- User avatar displays

### User Profiles
- Upload profile pictures
- View user information
- Update profile details

## 🎯 Key Features Implemented

1. **Chakra UI Theme Customization** - Deep theme integration with custom colors and components
2. **Dark/Light Mode** - Persistent theme toggle with smooth transitions
3. **Socket.io Integration** - Real-time message delivery and notifications
4. **Responsive Layout** - Mobile-friendly design with proper breakpoints
5. **Custom Animations** - Smooth transitions and engaging visual effects
6. **Form Validation** - Client-side validation for user inputs
7. **Error Handling** - User-friendly error messages and fallbacks

## 🛠️ Troubleshooting

### Port 3000 already in use
```bash
# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### Backend connection issues
Ensure the backend is running on `http://localhost:5000` and the `.env` file paths are configured correctly.

### Build issues
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules
npm install --legacy-peer-deps
```

## 📦 Dependencies

Key npm packages included:
- `axios` - HTTP requests
- `socket.io-client` - Real-time communication
- `react-router-dom` - Routing
- `@chakra-ui/react` - UI components
- `@chakra-ui/icons` - Icon library
- `framer-motion` - Animations

## 🚀 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder, ready for deployment to services like Vercel, Netlify, or any static hosting provider.

## 📝 Environment Variables

Create a `.env.local` file (if needed for API configuration):
```env
REACT_APP_API_URL=http://localhost:5000
```

## 📄 License

This project is licensed under the ISC License.

---

**Built with React and Chakra UI** • **Real-time Chat with Socket.io**
