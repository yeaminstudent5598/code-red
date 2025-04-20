# Code Red Message

A modern developer forum and collaboration platform built with Next.js that enables developers to share knowledge, ask questions, and collaborate in real-time.

🌐 **Live Demo**: [https://code-red-nxt0.onrender.com](https://code-red-nxt0.onrender.com)

## Features

- 🔐 **Authentication System**
  - Secure user registration and login
  - Password reset functionality
  - Profile management with customizable avatars
  - Social authentication options

- 💬 **Developer Forum**
  - Create and share technical blog posts
  - Ask and answer programming questions
  - Upvote/downvote posts and answers
  - Comment on posts and discussions
  - Rich text formatting with code snippets
  - Image upload support

- 👥 **Real-time Communication**
  - One-on-one messaging
  - Group chat functionality
  - Real-time notifications
  - Online/offline status indicators
  - Message history and search

- 👨‍💻 **Code Collaboration**
  - Integrated Monaco code editor
  - Syntax highlighting for multiple languages
  - Code formatting and linting
  - Share code snippets in messages
  - Collaborative code editing

- 🎨 **Modern UI**
  - Clean and intuitive interface
  - Built with Tailwind CSS
  - Fully responsive design
  - Beautiful animations and transitions
  - Dark/Light mode support
  - Mobile-friendly layout

## Tech Stack

- **Frontend**
  - Next.js 15.3.0
  - React 19
  - Tailwind CSS
  - Radix UI Components
  - Tiptap Editor
  - Socket.IO Client

- **Backend**
  - Next.js API Routes
  - MongoDB
  - NextAuth.js
  - Nodemailer

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd code-red-message
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add the following environment variables:
```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
EMAIL_SERVER_HOST=your_email_server_host
EMAIL_SERVER_PORT=your_email_server_port
EMAIL_SERVER_USER=your_email_server_user
EMAIL_SERVER_PASSWORD=your_email_server_password
EMAIL_FROM=your_email_from_address
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
code-red-message/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── (message)/         # Message and chat routes
│   ├── (LogInAndRegister)/# Authentication routes
│   ├── code-editor/       # Code editor feature
│   ├── qus-ans/          # Question and answer section
│   ├── profile/          # User profile management
│   └── ...
├── components/            # Reusable components
├── lib/                   # Utility functions and configurations
├── messages/              # Message-related components
├── Providers/             # Context providers
└── public/                # Static assets
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
