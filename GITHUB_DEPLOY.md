# 🚀 Deploy to GitHub Pages - Step by Step Guide

## Prerequisites
- GitHub account (create one at https://github.com if you don't have one)
- Git installed on your computer (usually pre-installed on Mac)

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `influencer-connect` (or any name you like)
3. Description: "Influencer Connect MVP - AI-powered influencer discovery platform"
4. Choose: **Public** (required for free GitHub Pages)
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click **"Create repository"**

## Step 2: Push Your Code to GitHub

Open Terminal and run these commands:

```bash
# Navigate to your project folder
cd /Users/raghavgoyal/Downloads/influencer-connect

# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit: Influencer Connect MVP"

# Add your GitHub repository as remote
# REPLACE 'YOUR_USERNAME' with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/influencer-connect.git

# Rename branch to main (GitHub standard)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note**: When you run `git push`, GitHub will ask for your username and password. 
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your GitHub password)
  - Create one at: https://github.com/settings/tokens
  - Click "Generate new token (classic)"
  - Give it a name like "GitHub Pages Deploy"
  - Select scope: `repo` (full control)
  - Click "Generate token"
  - Copy the token and use it as your password

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/influencer-connect`
2. Click on **"Settings"** (top right of repository page)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**

## Step 4: Access Your Live Site! 🎉

GitHub will give you a URL like:
- `https://YOUR_USERNAME.github.io/influencer-connect`

**Wait 1-2 minutes** for GitHub to build and deploy your site, then visit the URL!

## Step 5: Update Your Site (Optional)

Whenever you make changes:

```bash
cd /Users/raghavgoyal/Downloads/influencer-connect

# Add changed files
git add .

# Commit changes
git commit -m "Update: description of your changes"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild your site (takes 1-2 minutes).

## ✅ What You Get

- ✅ Free hosting on GitHub Pages
- ✅ HTTPS enabled automatically
- ✅ Custom domain support (optional)
- ✅ Automatic deployments on every push
- ✅ Version control with Git
- ✅ Public repository (visible to everyone)

## 🌐 Custom Domain (Optional)

1. In repository Settings → Pages
2. Under "Custom domain", enter your domain
3. Follow GitHub's instructions to configure DNS
4. Your site will be available at your custom domain

## 🐛 Troubleshooting

- **404 Error?** Wait 1-2 minutes after enabling Pages, then refresh
- **Styles not loading?** Make sure all file paths are relative (they should be)
- **Push rejected?** Make sure you've added the correct remote URL
- **Authentication error?** Use a Personal Access Token, not your password

## 📝 Quick Commands Reference

```bash
# Check git status
git status

# See what files changed
git diff

# View commit history
git log

# Update from GitHub (if working on multiple computers)
git pull
```

## 🎉 Success!

Your MVP is now live on GitHub Pages! Share the URL with anyone.

**Live URL**: `https://YOUR_USERNAME.github.io/influencer-connect`

---

## 💡 Pro Tips

1. **Update README.md** with your live URL
2. **Add a description** to your GitHub repository
3. **Add topics/tags** to your repository for discoverability
4. **Enable Issues** if you want to track bugs/features

## 📧 Need Help?

- GitHub Docs: https://docs.github.com/en/pages
- Git Help: https://git-scm.com/doc
- GitHub Support: https://support.github.com

