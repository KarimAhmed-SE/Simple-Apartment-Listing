Simple Apartment Listing Website and Mobile Application

Website Features

Frontend (Next.js)

Adding Apartments: Users can easily add new apartments to the listing.
Listing Apartments: A comprehensive list of available apartments is displayed.
Viewing Apartment Details: Detailed information about each apartment can be viewed.

Backend (Node.js with Express in TypeScript)

API Integration: The frontend seamlessly integrates with the backend to handle apartment data.
Database Connectivity: MongoDB is used as the database to store apartment information.
Docker Integration: Docker is utilized for containerization, allowing for easy deployment and scalability.

Mobile Application Features

React Native with Expo

Listing Apartments: Users can browse through a list of available apartments.
Viewing Apartment Details: Detailed information about each apartment can be accessed.
API for Adding Apartments: While there is no frontend for adding apartments, the mobile app communicates with the backend API to facilitate apartment addition.

Docker Integration
Single Command Execution: Using Docker Compose, the Next.js website and the Node.js backend can be launched with a single command, simplifying the deployment process.
Containerization: Each component of the project is containerized using Docker, ensuring consistency across different environments.
Efficient Resource Management: Docker optimizes resource utilization and provides a consistent runtime environment for the entire project.

To run the project locally, follow these steps:

for the nextjs website and the backend:
- navigate to the root directory of this project
- type in terminal docker-compose up --build
- This will run both the NextJs website and The backend

For the React-Native with Expo mobile application:
- navigate to the my-app folder
- type in terminal npm run web
- use the Expo Go app on your phone to scan the QR code in the terminal
- This will start the mobile app


DEMO

NextJs Demo Video: https://drive.google.com/file/d/1rjeJnDqOPloaMlXBAEA8moWTv_-uGTV5/view?usp=drive_link
Mobile Application Demo Video: https://drive.google.com/file/d/14RQq6U39DI5JIgk_x7URQE6eA7xJ4U_D/view?usp=drive_link
