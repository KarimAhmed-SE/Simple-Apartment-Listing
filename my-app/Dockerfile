# Use official Node.js image as base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install Expo CLI globally
RUN npm install -g expo-cli

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Expose port 19006 for the Metro bundler
EXPOSE 19006

# Start the Expo development server
CMD ["npm", "run", "web"]