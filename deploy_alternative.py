#!/usr/bin/env python3
"""
Alternative Deployment Script for Coastal Seven TaaS
This script can be used with various cloud platforms
"""

import os
import subprocess
import sys
from pathlib import Path

def build_app():
    """Build the React application"""
    print("🔨 Building React application...")
    
    try:
        # Install dependencies
        subprocess.run(["npm", "install"], check=True)
        print("✅ Dependencies installed")
        
        # Build the application
        subprocess.run(["npm", "run", "build"], check=True)
        print("✅ Build completed successfully!")
        
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Build failed: {e}")
        return False

def create_deployment_files():
    """Create deployment configuration files"""
    print("📝 Creating deployment files...")
    
    # Create a simple server script
    server_script = '''#!/usr/bin/env python3
import os
from http.server import HTTPServer, SimpleHTTPRequestHandler
import sys

class CustomHTTPRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="dist", **kwargs)
    
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 4173))
    server = HTTPServer(('0.0.0.0', port), CustomHTTPRequestHandler)
    print(f"Server running on port {port}")
    server.serve_forever()
'''
    
    with open('server.py', 'w') as f:
        f.write(server_script)
    
    print("✅ Deployment files created")

def main():
    """Main deployment function"""
    print("🚀 Starting deployment process...")
    
    # Build the app
    if not build_app():
        sys.exit(1)
    
    # Create deployment files
    create_deployment_files()
    
    print("✅ Deployment preparation completed!")
    print("📁 Your built app is in the 'dist' directory")
    print("🐍 You can run 'python server.py' to start the server")
    print("🌐 The app will be available at http://localhost:4173")

if __name__ == "__main__":
    main() 