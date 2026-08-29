🛒 Grolytics — Grocery Analytics Platform

Track what you buy. Understand what you spend. Manage what you have.

Grolytics is a full-stack Grocery Analytics Platform designed to help users manage and understand their grocery purchases after they have been made.

People frequently purchase groceries from multiple platforms such as Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon Fresh, and D-Mart Ready. Over time, it becomes difficult to remember what was purchased, how much was spent, how frequently an item was bought, and whether something is already available at home.

Grolytics solves this problem by bringing grocery purchase information into one centralized platform.

The application allows users to upload grocery bills, organize purchased items, maintain inventory, view purchase history, and analyze their grocery spending over different time periods.

🎯 Problem

Grocery purchases are often scattered across multiple platforms, making it difficult to answer questions like:

How much did I spend this month?
What groceries did I purchase?
When did I buy a particular item?
How frequently do I purchase it?
Do I already have this item at home?
Which products contribute most to my spending?

🟢 Our Solution

Grolytics acts as a personal grocery management and analytics system.

Instead of keeping grocery bills scattered across different applications, emails, screenshots, or physical receipts, users can organize them in one place.

The basic idea is:

Grocery Bill
     ↓
Upload / Scan
     ↓
Extract Grocery Information
     ↓
Convert into Structured Data
     ↓
Store in Database
     ↓
Organize Purchases
     ↓
Update Inventory
     ↓
Generate Analytics
     ↓
Display Dashboard

The user can then easily understand their grocery purchasing behavior.

👥 Who Is It For?

Grolytics can be useful for:

Students living independently
Working professionals
Families
People managing household groceries
People who shop across multiple grocery platforms
Anyone interested in tracking personal grocery expenses

🚀 Features
🧾 Bill Scanning — Convert grocery bills into structured data.
📦 Inventory Tracking — Track purchased items, quantity, bought date, and status.
📜 Purchase History — View previous grocery purchases.
📊 Spending Analytics — Analyze weekly, monthly, and yearly spending.
📈 Interactive Dashboard — View important grocery statistics and charts.
🔍 Filtering — Filter purchases by date, platform, product, etc.
🔔 Inventory Alerts — Highlight low-stock or finished items.
🔐 Authentication — Secure user accounts using JWT.

🛠 Tech Stack
Frontend
React.js
Tailwind CSS
React Router
Axios
Recharts
Backend
Node.js
Express.js
REST APIs
JWT Authentication
Database
PostgreSQL
Tools
Git & GitHub
Postman
VS Code

⚙️ Getting Started
1. Clone the repository
git clone <repository-url>
cd Grolytics
2. Install frontend dependencies
cd frontend
npm install
npm run dev
3. Install backend dependencies
cd backend
npm install
npm run dev
4. Configure environment variables

Create a .env file:

PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret
AI_API_KEY=your_api_key


📁 Project Structure
Grolytics/
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── layouts/
│       ├── services/
│       └── App.jsx
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
│
└── README.md

👩‍💻 Author

Harshita Chaurasiya
B.Tech — Information Technology