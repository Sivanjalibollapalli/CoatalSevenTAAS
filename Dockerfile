# Use Node.js as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the React app
RUN npm run build

# Install serve to run the built app
RUN npm install -g serve

# Expose port 4173
EXPOSE 4173

# Start the server
CMD ["serve", "-s", "dist", "-l", "4173"] 