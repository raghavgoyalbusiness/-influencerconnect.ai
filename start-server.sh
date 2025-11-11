#!/bin/bash
# Simple server startup script for Influencer Connect

cd "$(dirname "$0")"
echo "Starting server on http://localhost:8000"
echo "Press Ctrl+C to stop the server"
python3 -m http.server 8000

