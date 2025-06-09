# Dojo Blog – MERN Stack Application

This is a full-stack blog application built as an extension of [The Net Ninja's React blog tutorial](https://www.youtube.com/watch?v=U9T6YkEDkMo). It uses **React + Vite** for the frontend and **Express + MongoDB** for the backend, completing the MERN (MongoDB, Express, React, Node.js) stack.

## 🔧 Tech Stack

* **Frontend:** React (with Vite)
* **Backend:** Node.js + Express
* **Database:** MongoDB
* **API:** RESTful CRUD operations
* **Auth:** JWT-based authentication (with role-based access)

## ⚙️ React + Vite Setup

This frontend uses Vite for a fast and modern development experience, with support for hot module replacement and optimized builds.

### Plugins Used:

* [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) – uses Babel for Fast Refresh

### Expanding the ESLint Configuration

If you're building this into a production-grade app, it's recommended to use **TypeScript** and enable type-aware lint rules.
You can refer to the [TypeScript Vite template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) and use [`typescript-eslint`](https://typescript-eslint.io) for stricter linting.

---

## 🚀 Features

* Create, read, update, and delete blog posts
* User authentication with JWT
* Role-based access for writers and admins
* Clean and modular folder structure
* Responsive UI with a minimal design

---

## 📦 Getting Started

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

Make sure to set up your `.env` file with the appropriate MongoDB connection string and JWT secret.

---

## 📁 Folder Structure

```
/client     → React frontend (Vite)
/server     → Express backend
```

---

## 🙌 Credits

* Based on [The Net Ninja's React Blog Tutorial](https://www.youtube.com/watch?v=U9T6YkEDkMo)
* Backend and full-stack integration by [Louis](https://github.com/Louis2324)
