#!/usr/bin/env python3
"""
Coastal Seven TaaS - Lightning AI Deployment
A simple web server to serve the built React application
"""

import os
import subprocess
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler
import threading
import time

class CustomHTTPRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="dist", **kwargs)
    
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def build_react_app():
    """Build the React application"""
    print("🔨 Building React application...")
    
    try:
        # Install dependencies
        subprocess.run(["npm", "install"], check=True, capture_output=True, text=True)
        print("✅ Dependencies installed")
        
        # Build the application
        subprocess.run(["npm", "run", "build"], check=True, capture_output=True, text=True)
        print("✅ Build completed successfully!")
        
    except subprocess.CalledProcessError as e:
        print(f"❌ Build failed: {e}")
        print(f"Error output: {e.stderr}")
        sys.exit(1)

def start_server():
    """Start the HTTP server"""
    port = int(os.environ.get('PORT', 4173))
    
    print(f"🚀 Starting web server on port {port}...")
    print(f"📱 Your app will be available at: http://localhost:{port}")
    
    try:
        server = HTTPServer(('0.0.0.0', port), CustomHTTPRequestHandler)
        print(f"✅ Server started successfully!")
        print(f"🌐 Serving files from: {os.path.abspath('dist')}")
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
    except Exception as e:
        print(f"❌ Server error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    # Build the React app first
    build_react_app()
    
    # Start the server
    start_server() 