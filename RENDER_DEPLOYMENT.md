# Hosting on Render: Step-by-Step Instructions

This guide explains how to host your ported React application on [Render](https://render.com/) as a **Static Site**.

---

## 📋 Deployment Settings Reference

When configuring your web service on Render, use these values:

| Field | Value | Notes |
| :--- | :--- | :--- |
| **Build Service Type** | `Static Site` | Fast and free tier hosting for SPAs |
| **Root Directory** | `alexendar-react` | Tells Render to run commands inside the subfolder |
| **Build Command** | `npm install && npm run build` | Installs dependencies and builds the production bundle |
| **Publish Directory** | `dist` | Vite compiles files into the `dist` folder |

---

## 🚀 Deployment Steps

### 1. Push Code to GitHub / GitLab
Render connects directly to your Git repository to automatically build and deploy new changes when you push code.
* Ensure you commit your changes (including the `alexendar-react` folder) and push them to your repository (e.g., GitHub).

### 2. Create a Static Site on Render
1. Log in to your dashboard at [dashboard.render.com](https://dashboard.render.com/).
2. Click the **New +** button in the top right corner and select **Static Site**.
3. Connect your GitHub/GitLab account and select the repository containing this project.

### 3. Configure Deployment Settings
In the configuration screen, fill out the settings:
* **Name**: Choose a unique name (e.g., `alexendar-portfolio`).
* **Branch**: Select your main branch (e.g., `main`).
* **Root Directory**: Enter **`alexendar-react`** (since the React app is located in a subdirectory).
* **Build Command**: **`npm install && npm run build`**
* **Publish Directory**: **`dist`**

### 4. Deploy 
* Click **Deploy Static Site** at the bottom of the page.
* Render will pull the repository, run `npm install` and `npm run build`, and host the contents of the `dist` directory. Once completed, your site will be live on a custom URL (e.g. `https://alexendar-portfolio.onrender.com`).

---

## 🛠️ Handling SPA Routing Redirects (Optional)

If you decide to add client-side routing later (e.g., using `react-router-dom`), configure a rewrite rule to prevent `404 Not Found` errors on page reloads:

1. Go to your **Static Site Dashboard** on Render.
2. Select **Redirects/Rewrites** from the left sidebar.
3. Click **Add Rule** and enter:
   * **Source**: `/*`
   * **Destination**: `/index.html`
   * **Action**: `Rewrite`
4. Save the rule.
