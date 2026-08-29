# 🛒 Grolytics — Grocery Analytics Platform

> **Track what you buy. Understand what you spend. Manage what you have.**

Grolytics is a full-stack **Grocery Analytics Platform** designed to help users organize, track, and analyze their grocery purchases across multiple platforms such as **Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon Fresh, and D-Mart Ready**.

Unlike traditional grocery apps that focus on **ordering**, Grolytics focuses on **post-purchase management** — helping users manage bills, inventory, purchase history, and grocery spending in one centralized platform.

---

## 🎯 Problem

Grocery purchases are often scattered across multiple platforms, emails, screenshots, and physical receipts. This makes it difficult to answer simple questions such as:

* 💰 How much did I spend this month?
* 🛒 What groceries did I purchase?
* 📅 When did I buy a particular item?
* 🔄 How frequently do I purchase it?
* 📦 Do I already have this item at home?
* 📊 Which products contribute most to my spending?

### The problem in one line:

> **Users have grocery purchase data, but no centralized way to organize and understand it.**

---

## 💡 Solution

Grolytics brings grocery purchase information into **one centralized platform**.

The application allows users to upload grocery bills, convert them into structured data, maintain inventory, view purchase history, and analyze spending through an interactive dashboard.

### 🔄 How It Works

```text
        🧾 Grocery Bill
              ↓
        📤 Upload / Scan
              ↓
      🔍 Extract Information
              ↓
       📋 Structured Data
              ↓
        🗄️ Store in Database
              ↓
     ┌────────┼─────────┐
     ↓        ↓         ↓
 Inventory  History  Analytics
     │        │         │
     └────────┼─────────┘
              ↓
       📊 Interactive Dashboard
```

---

## 👥 Who Is It For?

Grolytics can be useful for:

* 🎓 Students living independently
* 💼 Working professionals
* 👨‍👩‍👧 Families managing household groceries
* 🛍️ People shopping across multiple grocery platforms
* 💰 Anyone interested in tracking personal grocery expenses

---

## 🚀 Features

### 🧾 Bill Scanning

Upload grocery bills and convert them into structured grocery data.

### 📦 Inventory Tracking

Track:

* Product name
* Quantity
* Purchase date
* Expected finish
* Current status

### 📜 Purchase History

View and manage previous grocery purchases in one place.

### 📊 Spending Analytics

Analyze grocery spending across:

* Weekly
* Monthly
* Yearly

### 📈 Interactive Dashboard

View important grocery statistics and visualizations through an easy-to-understand dashboard.

### 🔍 Filtering

Filter grocery data by:

* Date
* Platform
* Product
* Time period

### 🔔 Inventory Alerts

Highlight items that are:

* Low in stock
* Finished
* Requiring attention

### 🔐 Authentication

Secure user accounts using **JWT-based authentication**.

---

## 🛠️ Tech Stack

### Frontend

* ⚛️ React.js
* 🎨 Tailwind CSS
* 🧭 React Router
* 🔗 Axios
* 📊 Recharts

### Backend

* 🟢 Node.js
* 🚂 Express.js
* 🔌 REST APIs
* 🔐 JWT Authentication

### Database

* 🐘 PostgreSQL

### Development Tools

* Git
* GitHub
* Postman
* VS Code

---

## 🏗️ System Architecture

```text
┌──────────────────────────┐
│      React Frontend      │
│   React + Tailwind CSS   │
└────────────┬─────────────┘
             │
             │ REST API
             ▼
┌──────────────────────────┐
│    Node.js + Express     │
│      Backend Server      │
└────────────┬─────────────┘
             │
             │ SQL
             ▼
┌──────────────────────────┐
│       PostgreSQL         │
│         Database         │
└──────────────────────────┘
```

---

## 📁 Project Structure

```text
Grolytics/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   ├── services/
│   └── server.js
│
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* Git

---

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd Grolytics
```

---

### 2️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

---

### 3️⃣ Setup Backend

Open another terminal:

```bash
cd backend
npm install
npm run dev
```

---

### 4️⃣ Configure Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret
AI_API_KEY=your_api_key
```

> ⚠️ Never commit your `.env` file or API keys to GitHub.

---

## 🔐 Authentication Flow

Grolytics uses JWT for authentication.

```text
User Login
    ↓
Backend validates credentials
    ↓
JWT Token Generated
    ↓
Token sent to Frontend
    ↓
Protected API Request
    ↓
JWT Verification
    ↓
Access Granted
```

This ensures users can access only their authorized data.

---

## 🗄️ Basic Database Structure

The application uses PostgreSQL to manage structured grocery data.

```text
User
 │
 ├──────< Bills
 │          │
 │          └──────< Bill Items
 │
 └──────< Inventory
```

A user can have multiple bills, and each bill can contain multiple grocery items.

---

## 📊 Example

Suppose a user uploads a bill:

```text
Blinkit

Milk       ₹60
Rice       ₹550
Bread      ₹45
Eggs       ₹80
----------------
Total      ₹735
```

Grolytics processes the bill and stores the information as structured data.

The dashboard can then display:

```text
Total Bills       → 1
Total Spending    → ₹735
Top Product       → Rice
Average Bill      → ₹735
```

As more bills are added, Grolytics can generate meaningful spending and purchase analytics.

---

## 🔮 Future Scope

Planned improvements include:

* 📱 Mobile application
* 🧾 Improved receipt processing
* 🏷️ Automatic product categorization
* 📊 Advanced spending analytics
* 🔔 Improved notifications
* ☁️ Cloud deployment
* 📈 More detailed purchase insights

---

## ⚠️ Current Limitations

* Receipt formats can vary significantly between platforms.
* Bill extraction may require user verification.
* Analytics depend on the quality of the stored data.
* The current version is designed primarily as a portfolio/project-scale application.

---


## 👩‍💻 Author

### Harshita Chaurasiya

**B.Tech — Information Technology**

