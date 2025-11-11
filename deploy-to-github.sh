#!/bin/bash

# GitHub Pages Deployment Script
# This script helps you deploy your MVP to GitHub Pages

echo "🚀 Influencer Connect MVP - GitHub Pages Deployment"
echo "=================================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed."
    echo ""
    echo "Please install Git first:"
    echo "1. Install Xcode Command Line Tools:"
    echo "   xcode-select --install"
    echo ""
    echo "2. Or install Git from: https://git-scm.com/download/mac"
    echo ""
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Check if we're in a git repository
if [ -d .git ]; then
    echo "✅ Git repository already initialized"
else
    echo "📦 Initializing git repository..."
    git init
    echo "✅ Git repository initialized"
fi

echo ""
echo "📝 Next Steps:"
echo "=============="
echo ""
echo "1. Create a GitHub repository:"
echo "   - Go to https://github.com/new"
echo "   - Name it: influencer-connect"
echo "   - Make it PUBLIC (required for free GitHub Pages)"
echo "   - DO NOT initialize with README"
echo ""
echo "2. Add your files and push to GitHub:"
echo "   git add ."
echo "   git commit -m 'Initial commit: Influencer Connect MVP'"
echo "   git branch -M main"
echo "   git remote add origin https://github.com/YOUR_USERNAME/influencer-connect.git"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   - Go to your repository on GitHub"
echo "   - Click 'Settings' → 'Pages'"
echo "   - Source: Select 'main' branch, '/ (root)' folder"
echo "   - Click 'Save'"
echo ""
echo "4. Wait 1-2 minutes, then visit:"
echo "   https://YOUR_USERNAME.github.io/influencer-connect"
echo ""
echo "📚 For detailed instructions, see: GITHUB_DEPLOY.md"
echo ""
echo "Would you like to proceed with adding files? (y/n)"
read -r response

if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
    echo ""
    echo "📦 Adding files to git..."
    git add .
    echo "✅ Files added"
    echo ""
    echo "💾 Commit files? (y/n)"
    read -r commit_response
    
    if [[ "$commit_response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        git commit -m "Initial commit: Influencer Connect MVP"
        echo "✅ Files committed"
        echo ""
        echo "🔗 Now add your GitHub repository as remote:"
        echo "   git remote add origin https://github.com/YOUR_USERNAME/influencer-connect.git"
        echo "   git branch -M main"
        echo "   git push -u origin main"
    fi
fi

echo ""
echo "✅ Setup complete! Follow the steps above to deploy to GitHub Pages."

