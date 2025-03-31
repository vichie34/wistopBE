# Wistop Backend

This is the backend codebase for the Wistop project, which provides APIs for authentication, user management, transactions, and integrations with third-party services like Google OAuth and Safe Haven APIs.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [License](#license)

---

## Features

- **Authentication**: Supports OTP-based authentication and Google OAuth.
- **User Management**: APIs for user signup, login, and profile management.
- **Transactions**: Handles transactions and transfers.
- **Third-Party Integrations**:
  - Google OAuth for user authentication.
  - Safe Haven APIs for financial services.
- **Security**:
  - Rate limiting to prevent abuse.
  - Helmet for securing HTTP headers.
  - CORS support for cross-origin requests.

---

## Technologies Used

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Passport.js, JWT
- **Third-Party Libraries**:
  - `axios` for HTTP requests
  - `express-session` for session management
  - `bcrypt` for password hashing
  - `dotenv` for environment variable management
- **Dev Tools**:
  - `nodemon` for development
  - `vitest` for testing

---

## Setup and Installation

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud-based)
- A Google Cloud Project with OAuth credentials

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd wistopBE/backend
  ``
npm install
npm start
The server will run on http://localhost:7000 by default.

# General .evn variables
PORT=7000
JWT_SECRET=<your_jwt_secret>

# MongoDB
mongoURI=<your_mongodb_connection_string>

# Google OAuth
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
GOOGLE_REDIRECT_URI_DEV=http://localhost:7000/api/auth/google/callback
GOOGLE_REDIRECT_URI_PROD=https://your-production-domain.com/api/auth/google/callback

# Safe Haven API
SAFE_HAVEN_API_BASE_URL=https://api.safehavenmfb.com
SAFE_HAVEN_CLIENT_ID=<your_safe_haven_client_id>
SAFE_HAVEN_CLIENT_ASSERTION=<your_client_assertion_token>

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=<your_email>
SMTP_PASS=<your_email_password>
SMTP_FROM=<your_email>

API Endpoints
Authentication
POST /api/auth/request-otp - Request an OTP for authentication.
POST /api/auth/verify-otp - Verify the OTP.
POST /api/auth/complete-signup - Complete the signup process.
POST /api/auth/login - Login with email and password.
POST /api/auth/google - Login with Google OAuth.
GET /api/auth/google/callback - Google OAuth callback.
User Management
GET /api/user - Get user details.
PUT /api/user - Update user details.
Transactions
POST /api/transactions - Create a new transaction.
GET /api/transactions - Get transaction history.
Admin
GET /api/admin/system-control - Admin system controls.
GET /api/admin/products - Manage products.
Testing
To run tests, use the following command:

License
This project is licensed under the ISC License. See the LICENSE file for details.


### Notes:
- Replace `<repository-url>` with the actual URL of your Git repository.
- Update the `Environment Variables` section with actual values for your project.
- Add or remove endpoints in the `API Endpoints` section based on your project.

    
