# Influencer Connect MVP - Setup Guide

## 📦 Installation

1. **Extract the zip file** to a folder on your computer
2. **Open a terminal** and navigate to the project folder:
   ```bash
   cd influencer-connect
   ```

## 🚀 Running the MVP

### Option 1: Python HTTP Server (Recommended)
```bash
python3 -m http.server 8000
```

Then open your browser and go to: `http://localhost:8000`

### Option 2: Use the provided server script
```bash
chmod +x start-server.sh
./start-server.sh
```

### Option 3: Use the Python server script
```bash
python3 serve.py
```

## 📁 Project Structure

```
influencer-connect/
├── index.html          # Main HTML file
├── app.js              # Application logic
├── styles.css          # Styling
├── data/
│   └── influencers.json  # Influencer data
├── integration/        # Lovable integration files
└── README.md          # Project documentation
```

## ✨ Features

- **Discover Page**: Search for influencers using natural language prompts
- **Offers Marketplace**: Browse and create collaboration opportunities
- **Pre-registration Widget**: Sidebar widget for early access signup
- **Credits System**: Pay-per-search model for brands
- **User Accounts**: Login system for brands and influencers
- **Local Storage**: All data is stored locally in the browser

## 🔧 Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3 (for local server) - Optional, you can also use any HTTP server

## 📝 Notes

- All data is stored in browser's localStorage
- No backend required - this is a pure frontend MVP
- The server is only needed to serve the files (to avoid CORS issues)

## 🌐 Deployment

To deploy this MVP to production:

1. Upload all files to a web hosting service (Netlify, Vercel, GitHub Pages, etc.)
2. No build process required - just upload the files
3. Update any API endpoints if you add backend functionality later

## 🐛 Troubleshooting

- **Port 8000 already in use?** Use a different port: `python3 -m http.server 8080`
- **CORS errors?** Make sure you're running a local server, not opening the HTML file directly
- **Styles not loading?** Check that all files are in the same directory

## 📧 Support

For issues or questions, refer to the main README.md file.

