import lightning as L
import subprocess
import os
from pathlib import Path


class CoastalSevenTaaS(L.LightningFlow):
    def __init__(self):
        super().__init__()
        
        # Build the React app
        self.build_react_app()
        
        # Create a web frontend
        self.web_frontend = L.frontend.StaticWebFrontend(
            root_dir="dist",
            port=4173
        )
    
    def build_react_app(self):
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
            raise

    def run(self):
        """Run the application"""
        self.web_frontend.run()


if __name__ == "__main__":
    app = L.LightningApp(CoastalSevenTaaS())
    app.run() 