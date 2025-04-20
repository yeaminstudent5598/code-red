# Code Red Message

A modern web application built with Next.js that provides a platform for code sharing, messaging, and collaborative programming.

## Features

- 🔐 **Authentication System**
  - User registration and login
  - Password reset functionality
  - Profile management

- 💬 **Messaging System**
  - Real-time messaging using Socket.IO
  - Rich text editor with Tiptap
  - Code sharing capabilities

- 👨‍💻 **Code Editor**
  - Monaco Editor integration
  - Syntax highlighting
  - Code formatting

- 🎨 **Modern UI**
  - Built with Tailwind CSS
  - Responsive design
  - Beautiful animations
  - Dark/Light mode support

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
│   ├── (message)/         # Message routes
│   ├── (LogInAndRegister)/# Authentication routes
│   ├── code-editor/       # Code editor feature
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
