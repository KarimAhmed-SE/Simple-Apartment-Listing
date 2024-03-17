# Use official Node.js image as base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install 

# Copy source code
COPY . .

# Expose port 3001
EXPOSE 3001

# Command to run the Node.js backend
CMD ["node", "index.js"]