#!/usr/bin/env python3
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
