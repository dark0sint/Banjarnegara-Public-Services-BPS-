# Banjarnegara Public Services (BPS) Mobile App

## Description
Banjarnegara Public Services (BPS) is an integrated mobile application designed for Banjarnegara Regency Government, providing unified public services from various departments such as Health, Education, and Social Services. Users can access information, submit complaints, and receive notifications seamlessly. App features a React Native front-end for cross-platform mobile compatibility and a Node.js back-end with MongoDB for robust data management, ensuring secure and efficient service delivery.

Key features include:
- User authentication and profile management.
- Integrated complaint submission to multiple departments.
- Real-time notifications for service updates.
- Scalable back-end API ready for server deployment.

This project is open-source and ready to deploy on servers like AWS or Heroku using Docker.

## Installation and Setup
1. **Prerequisites**: Install Node.js, React Native CLI, MongoDB, and Docker.
2. **Clone Repository**: `git clone <this-repo-url>`
3. **Back-end Setup**:
   - Navigate to `backend/`: `cd backend`
   - Install dependencies: `npm install`
   - Create `.env` file with `MONGO_URI` and `JWT_SECRET`.
   - Run: `npm start` or use Docker: `docker-compose up`
4. **Front-end Setup**:
   - Navigate to `frontend/`: `cd frontend`
   - Install dependencies: `npm install`
   - Run on Android: `npm run android` or iOS: `npm run ios`
5. **Deployment**: Use Docker Compose for full stack deployment.

## Call to Action
For more insights on cybersecurity, OSINT, and tech trends, visit our blog at [https://darkosint.blogspot.com/](https://darkosint.blogspot.com/). Stay updated with latest in digital security and government tech innovations!
