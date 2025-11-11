# Influencer Connect MVP

AI-powered influencer discovery platform with natural language search, offers marketplace, and collaboration management.

## 🌐 Live Demo

**[View Live on GitHub Pages](https://YOUR_USERNAME.github.io/influencer-connect)** (after deployment)

## 🚀 Quick Start

### Local Development

#### Option 1: Python HTTP Server (Recommended)
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser.

#### Option 2: Startup Script
```bash
chmod +x start-server.sh
./start-server.sh
```

## 📦 Deploy to GitHub Pages

See **[GITHUB_DEPLOY.md](./GITHUB_DEPLOY.md)** for detailed deployment instructions.

**Quick Steps:**
1. Create a GitHub repository
2. Push this code to GitHub
3. Enable GitHub Pages in repository settings
4. Your site will be live at: `https://YOUR_USERNAME.github.io/influencer-connect`

## ✨ Features

### Discover Page
- **Natural Language Search**: Describe what you're looking for in plain English
- **Smart Filtering**: Automatically extracts location, gender, category, platform, age, and follower count
- **Credits System**: Pay-per-search model for brands
- **Shortlisting**: Save favorite influencers

### Offers Marketplace
- **Browse Offers**: Discover paid collaboration opportunities
- **Create Offers**: Post your own offers as a business
- **Apply to Offers**: One-click application with auto-scoring
- **Track Progress**: Monitor offer status and submissions

### Additional Features
- **User Accounts**: Login system for brands and influencers
- **Pre-registration Widget**: Sidebar widget for early access signup
- **Analytics Dashboard**: Track campaign performance
- **Beautiful UI**: Modern gradient design with smooth animations
- **Responsive**: Works on desktop and mobile devices

## 📝 Example Searches

- "female beauty Instagram London"
- "male fitness YouTube 25-30"
- "TikTok food London"
- "female fashion Paris"
- "micro-influencers fitness"

## 📁 File Structure

```
influencer-connect/
├── index.html              # Main HTML file
├── app.js                  # Application logic
├── styles.css              # Styling
├── data/
│   └── influencers.json    # Influencer data (embedded in app.js)
├── integration/            # Lovable integration files
├── netlify.toml           # Netlify configuration
├── _redirects             # Netlify redirects
└── README.md              # This file
```

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla JS)
- **Storage**: LocalStorage (browser-based)
- **Deployment**: GitHub Pages, Netlify, or any static hosting
- **No Backend Required**: Pure frontend MVP

## 📚 Documentation

- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Local setup instructions
- **[GITHUB_DEPLOY.md](./GITHUB_DEPLOY.md)** - GitHub Pages deployment
- **[DEPLOY.md](./DEPLOY.md)** - Other deployment options
- **[QUICK_DEPLOY.md](./QUICK_DEPLOY.md)** - Quick deployment guide

## 🎯 Usage

1. **For Brands**: Search for influencers, create offers, manage campaigns
2. **For Influencers**: Browse offers, apply to collaborations, submit work
3. **Credits**: Brands need credits to search (purchase in-app)
4. **Offers**: Businesses post offers, creators apply, funds held in escrow

## 🔒 Privacy & Data

- All data is stored locally in browser's localStorage
- No backend or database required
- No API keys needed
- Perfect for MVP/demo purposes

## 📧 Support

For issues or questions, please open an issue on GitHub.

## 📄 License

This project is open source and available for use.

## 🚀 Deployment Status

- ✅ Ready for GitHub Pages
- ✅ Ready for Netlify
- ✅ Ready for Vercel
- ✅ Ready for any static hosting

---

**Made with ❤️ for influencer marketing**

