#!/bin/bash

# Coastal Seven TaaS - Lightning AI Deployment Script

echo "🚀 Starting deployment to Lightning AI..."

# Check if lightning CLI is installed
if ! command -v lightning &> /dev/null; then
    echo "❌ Lightning CLI not found. Installing..."
    pip install lightning
fi

# Check if user is logged in
if ! lightning whoami &> /dev/null; then
    echo "🔐 Please login to Lightning AI..."
    lightning login
fi

# Build the project locally first to check for errors
echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Lightning AI
    echo "🚀 Deploying to Lightning AI..."
    lightning deploy app --name coastal-seven-taas
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "📱 Your app should be available at the provided Lightning AI URL"
    else
        echo "❌ Deployment failed. Check the logs above for errors."
        exit 1
    fi
else
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi 