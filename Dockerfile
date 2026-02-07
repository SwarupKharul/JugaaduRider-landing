# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve the application with 'serve'
FROM node:20-alpine

WORKDIR /app

# Install 'serve' package globally to serve static files
RUN npm install -g serve

# Copy the build output from the builder stage
COPY --from=builder /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Start command to serve the dist folder as a single-page app
CMD ["serve", "-s", "dist", "-l", "3000"]
