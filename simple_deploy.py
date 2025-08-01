import lightning as L
import subprocess
import os


class CoastalSevenTaaS(L.LightningApp):
    def __init__(self):
        super().__init__()
        
        # Build the React app
        self.build_react_app()
        
        # Create a simple web frontend
        self.web_frontend = L.frontend.StaticWebFrontend(
            root_dir="dist",
            port=4173
        )
    
    def build_react_app(self):
        """Build the React application"""
        print("🔨 Building React application...")
        
        # Install dependencies
        subprocess.run(["npm", "install"], check=True)
        
        # Build the application
        subprocess.run(["npm", "run", "build"], check=True)
        
        print("✅ Build completed successfully!")


# Create the app
app = CoastalSevenTaaS() 