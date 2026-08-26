# grolytics
Grolytics — A full-stack grocery analytics platform that helps users organize grocery purchases, track spending, view purchase history, manage inventory, and analyze weekly, monthly, and yearly consumption from uploaded bills.
# Grolytics 🛒

> **Track. Organize. Understand your grocery spending.**

Grolytics is a full-stack grocery analytics platform designed to help individuals and families manage their grocery purchase history and understand their spending patterns.

Instead of being another grocery ordering or grocery-list application, Grolytics focuses on **what happens after groceries are purchased**.

Users can upload grocery bills, organize purchase data, track their grocery history, manage inventory, and analyze spending across weekly, monthly, and yearly periods.

---

## 🚀 Problem

People frequently purchase groceries through multiple platforms such as:

- Blinkit
- Zepto
- Instamart
- BigBasket
- Amazon Fresh
- D-Mart Ready

However, after purchasing groceries, it becomes difficult to answer simple questions:

- When did I last buy this product?
- How frequently do I purchase it?
- How much am I spending on groceries?
- Which products do I purchase most often?
- How much did I spend this month compared to previous months?
- What does my grocery spending look like over a year?

Grolytics aims to provide a **unified history of grocery purchases** instead of keeping purchase information scattered across different platforms and bills.

---

## 💡 Solution

Grolytics converts grocery bills into structured data and organizes the information into an easy-to-understand dashboard.

The platform focuses on:

```text
Grocery Bills
      ↓
Structured Purchase Data
      ↓
Organized History
      ↓
Inventory + Analytics
      ↓
Human Decision Making

📊 Grocery Analytics

Understand grocery spending and purchasing patterns through visualizations.

Examples:

Monthly spending
Weekly spending
Yearly spending
Most purchased products
Category-wise spending
Purchase frequency
Spending trends
📈 Reports

Generate organized summaries of grocery purchases and spending.

Reports can be viewed based on:

Weekly
   ↓
Monthly
   ↓
Yearly
🧠 Human-Centered Approach

Grolytics is intentionally designed without AI-driven decision making.

The application does not:

Predict what the user should buy
Automatically recommend purchases
Make budget decisions
Generate behavioral predictions
Tell users what they should do

Instead:

Grolytics organizes the data and presents it clearly. The user makes the decision.

AI, if used in the project, is limited to assisting with bill/receipt data extraction and organization.

🖥️ Dashboard

The dashboard provides an overview of the user's grocery activity.

It includes:

Total purchases
Monthly spending
Unique products
Average spending
Monthly spending charts
Category-wise spending
Recent purchases
Frequently purchased products
🛠️ Tech Stack
Frontend
React.js
Vite
Tailwind CSS
React Router
Recharts
Axios
Lucide React
Backend
Node.js
Express.js
REST APIs
Database
PostgreSQL
Development Tools
Git
GitHub
VS Code
Postman
🏗️ Project Architecture
Grolytics
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── navbar/
│   │   │   ├── sidebar/
│   │   │   └── layout/
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard/
│   │   │   ├── UploadBills/
│   │   │   ├── Inventory/
│   │   │   ├── PurchaseHistory/
│   │   │   ├── Analytics/
│   │   │   └── Reports/
│   │   │
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── middleware/
│   ├── models/
│   └── server.js
│
└── README.md

🔄 Application Flow
User
 │
 ▼
Upload Grocery Bill
 │
 ▼
Bill Processing
 │
 ▼
Structured JSON
 │
 ▼
Database
 │
 ├───────────────┐
 ▼               ▼
Purchase       Inventory
History           │
 │                │
 └───────┬────────┘
         ▼
      Analytics
         │
         ▼
      Reports
🎯 Project Goals

The main goals of Grolytics are:

Create a unified grocery purchase history.
Organize grocery data from different sources.
Make grocery spending easier to understand.
Provide useful historical analytics.
Reduce the effort required to manually maintain grocery records.
Keep decision-making with the user.
🔮 Future Improvements

Possible future improvements include:

Better bill parsing
More grocery platforms
Advanced filtering
Export reports
Data visualization improvements
Authentication and user accounts
Cloud deployment
Mobile-friendly experience
👩‍💻 Author

Harshita Chaurasiya

B.Tech CSE Student

Interested in:

Full Stack Development
Data Structures & Algorithms
Software Development
⭐ Project Status

🚧 Currently under development

Grolytics is being developed as a full-stack web development project with a focus on practical software architecture, data organization, REST APIs, database management, and frontend development.

📄 License

This project is created for educational and portfolio purposes.


### One recommendation

For your **resume/GitHub profile**, I would **not** put "AI" prominently in the README. Your strongest story is:

> **React + Node/Express + PostgreSQL + REST API + data processing + analytics**
