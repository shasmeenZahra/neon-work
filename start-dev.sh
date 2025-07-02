#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Starting AYESHA ACADEMY Full-Stack Development Environment${NC}"

# Check if MongoDB is running
if ! pgrep -x "mongod" > /dev/null; then
    echo -e "${YELLOW}⚠️  MongoDB not detected. Make sure MongoDB is running on localhost:27017${NC}"
    echo -e "${YELLOW}   You can start MongoDB with: mongod${NC}"
fi

# Check if .env file exists
if [ ! -f .env ]; then
    echo -e "${YELLOW}⚠️  .env file not found. Creating from .env.example...${NC}"
    cp .env.example .env
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    npm install
fi

echo -e "${GREEN}✅ Starting backend server on http://localhost:5000${NC}"
echo -e "${GREEN}✅ Starting frontend server on http://localhost:5173${NC}"
echo -e "${GREEN}📱 Frontend will be accessible at: http://localhost:5173${NC}"
echo -e "${GREEN}🔧 Backend API will be accessible at: http://localhost:5000/api${NC}"

# Start both frontend and backend
npm run dev:full
