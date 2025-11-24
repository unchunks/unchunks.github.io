# Indie Dev Zero Portfolio

This is a portfolio website built with React, Vite, and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/unchunks/unchunks.github.io.git
   cd unchunks.github.io
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building
Build the project for production:
```bash
npm run build
```
The output will be in the `dist` directory.

## Customization

You can easily update the site content by editing `src/data.js`.
- **Profile**: Name, role, bio, social links.
- **Projects**: Add or remove projects.
- **Posts**: Add new blog posts.

## Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.
Any push to the `main` branch will trigger a deployment.

Ensure your repository settings are configured to serve from the `gh-pages` branch (or whichever branch the action deploys to, usually `gh-pages` created by the action).
