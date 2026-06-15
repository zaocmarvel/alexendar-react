#!/bin/bash

# This script helps push your local git repository to GitHub.
# Make sure you have created a repository named "alexendar-react" on GitHub first (https://github.com/new).

if [ -z "$1" ]; then
  echo "❌ Error: Please specify your GitHub username."
  echo "Usage: ./push_to_github.sh <your-github-username>"
  exit 1
fi

GITHUB_USER=$1
REPO_NAME="alexendar-react"

# Rename default branch to main if not already
git branch -M main

# Check if origin remote already exists
if git remote | grep -q "^origin$"; then
  echo "⚠️ 'origin' remote already exists. Overwriting with the new URL..."
  git remote set-url origin "https://github.com/${GITHUB_USER}/${REPO_NAME}.git"
else
  echo "Adding Git remote origin..."
  git remote add origin "https://github.com/${GITHUB_USER}/${REPO_NAME}.git"
fi

echo "🚀 Pushing commits to https://github.com/${GITHUB_USER}/${REPO_NAME}.git..."
git push -u origin main

if [ $? -eq 0 ]; then
  echo "✅ Push successful! Your repository is now live."
else
  echo "❌ Push failed. Please verify that:"
  echo "  1. You created the repository named '${REPO_NAME}' at https://github.com/new"
  echo "  2. You have write permissions to that GitHub account."
fi
