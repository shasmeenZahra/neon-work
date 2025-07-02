# AYESHA TUTOR ACADEMY - Full-Stack Application

A modern, responsive educational platform connecting students with qualified tutors. Built with React, Node.js, Express, and MongoDB.

## 🌟 Features

### Frontend

- **Modern React Application** with TypeScript and Vite
- **Responsive Design** using TailwindCSS
- **Authentication System** with JWT tokens
- **Role-Based Access** (Student/Tutor/Admin)
- **Interactive Forms** for tutor applications and student requests
- **Real-time Form Validation**
- **Professional UI Components** with Radix UI

### Backend

- **Express.js API** with TypeScript
- **MongoDB Database** with Mongoose ODM
- **JWT Authentication** with bcrypt password hashing
- **Input Validation** and sanitization
- **Rate Limiting** and security middleware
- **RESTful API Design**
- **Role-Based Authorization**

### Security Features

- Password hashing with bcrypt
- JWT token authentication
- Input validation and sanitization
- CORS protection
- Rate limiting
- Helmet.js security headers

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ayesha-academy
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your configuration:

   ```
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/ayesha-academy
   JWT_SECRET=your-super-secret-jwt-key
   FRONTEND_URL=http://localhost:5173
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system:

   ```bash
   # On macOS with Homebrew
   brew services start mongodb-community

   # On Ubuntu/Linux
   sudo systemctl start mongod

   # Or start manually
   mongod
   ```

5. **Start the development servers**

   ```bash
   # Start both frontend and backend
   npm run dev:full

   # Or start them separately
   npm run server  # Backend only (port 5000)
   npm run dev     # Frontend only (port 5173)
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000/api
   - API Health Check: http://localhost:5000/api/health

## 📁 Project Structure

```
ayesha-academy/
├── server/                 # Backend Express application
│   ├── models/            # MongoDB models
│   │   ├── User.js       # User authentication model
│   │   ├── Tutor.js      # Tutor application model
│   │   └── Student.js    # Student request model
│   ├── routes/           # API routes
│   │   ├── auth.js       # Authentication routes
│   │   ├── tutors.js     # Tutor management routes
│   │   └── students.js   # Student request routes
│   ├── middleware/       # Custom middleware
│   │   ├── auth.js       # JWT authentication middleware
│   │   └── validation.js # Input validation middleware
│   └── index.js          # Server entry point
├── src/                  # Frontend React application
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   ├── Header.tsx   # Navigation header
│   │   ├── Footer.tsx   # Site footer
│   │   ├── TutorForm.tsx    # Tutor application form
│   │   ├── StudentForm.tsx  # Student request form
│   │   └── ProtectedRoute.tsx # Route protection
│   ├── contexts/        # React contexts
│   │   └── AuthContext.tsx  # Authentication context
│   ├── lib/             # Utilities and API client
│   │   ├── api.ts       # Backend API client
│   │   └── utils.ts     # Utility functions
│   ├── pages/           # Page components
│   │   ├── Index.tsx    # Homepage
│   │   ├── Login.tsx    # Login page
│   │   ├── Register.tsx # Registration page
│   │   ├── Dashboard.tsx # User dashboard
│   │   ├── AboutUs.tsx  # About page
│   │   └── Contact.tsx  # Contact page
│   └── App.tsx          # Main app component
└── package.json         # Dependencies and scripts
```

## 🔧 API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PATCH /api/auth/profile` - Update user profile
- `GET /api/auth/verify` - Verify JWT token

### Tutors

- `POST /api/tutors/apply` - Submit tutor application
- `GET /api/tutors` - Get all approved tutors (with filters)
- `GET /api/tutors/:id` - Get tutor by ID
- `GET /api/tutors/my/application` - Get current user's tutor application
- `PATCH /api/tutors/my/application` - Update tutor application

### Students

- `POST /api/students/request` - Submit student tutor request
- `GET /api/students/my/requests` - Get current user's requests
- `GET /api/students/my/requests/:id` - Get specific request
- `PATCH /api/students/my/requests/:id` - Update request
- `GET /api/students/my/requests/:id/matches` - Get tutor matches

## 👤 User Roles

### Student

- Submit tutor requests
- View and manage their requests
- See matched tutors
- Update profile

### Tutor

- Submit tutor applications
- View application status
- Update application (if pending)
- Set hourly rates and availability

### Admin (Future Enhancement)

- Review and approve tutor applications
- Manage all users and requests
- View platform analytics

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start frontend development server
- `npm run server` - Start backend development server
- `npm run dev:full` - Start both frontend and backend
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm start` - Start production server

### Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/ayesha-academy

# JWT Secret (use a strong secret in production)
JWT_SECRET=your-super-secret-jwt-key

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

### Database Schema

#### Users Collection

```javascript
{
  email: String (unique),
  password: String (hashed),
  firstName: String,
  lastName: String,
  role: 'student' | 'tutor' | 'admin',
  isEmailVerified: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### Tutors Collection

```javascript
{
  userId: ObjectId (ref: User),
  name: String,
  email: String,
  phone: String,
  subjects: [String],
  qualification: String,
  experience: String,
  hourlyRate: Number,
  preferredMode: 'online' | 'in-person' | 'both',
  availability: String,
  bio: String,
  status: 'pending' | 'approved' | 'rejected',
  averageRating: Number,
  totalReviews: Number,
  createdAt: Date
}
```

#### Students Collection

```javascript
{
  userId: ObjectId (ref: User),
  studentName: String,
  email: String,
  phone: String,
  grade: String,
  subjects: [String],
  learningGoals: String,
  schedule: String,
  preferredMode: 'online' | 'in-person' | 'both',
  budget: String,
  urgency: String,
  location: String,
  status: 'pending' | 'matched' | 'in-progress' | 'completed',
  matchedTutors: [TutorMatch],
  createdAt: Date
}
```

## 🚀 Deployment

### Frontend (Netlify/Vercel)

1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables in deployment platform

### Backend (Heroku/Railway/DigitalOcean)

1. Set up MongoDB Atlas or cloud database
2. Set environment variables
3. Deploy the server code
4. Update CORS settings for production domain

### Production Environment Variables

```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/ayesha-academy
JWT_SECRET=super-secure-production-secret
FRONTEND_URL=https://your-domain.com
```

## 🔒 Security Considerations

- All passwords are hashed using bcrypt
- JWT tokens expire after 7 days
- Rate limiting prevents abuse
- Input validation on all endpoints
- CORS configured for specific origins
- Security headers with Helmet.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📞 Support

For support and questions:

- Email: support@ayesha-academy.com
- Documentation: [Link to docs]
- Issues: [GitHub Issues]

## 📄 License

This project is licensed under the MIT License.

---

**AYESHA TUTOR ACADEMY** - Connecting passionate educators with eager learners.
