# ITCC-14_Group-Late-Comers

## 🧑‍💻 Team Members

| Name | GitHub Profile |
| :--- | :--- |
| **Arocha, Maxenne** | [Link to GitHub Profile](https://github.com/Maxenne) |
| **Velasco, Percy Bray** | [Link to GitHub Profile](https://github.com/JakeffXU2023) |
| **Torregosa, Rolando** | [No Github Link, Email Instead: 20220025104@my.xu.edu.ph] |
| **Macahia, Ahron Denver** | [Link to GitHub Profile](https://github.com/AhronD) |

---

# Game Release Tracker API

The Game Release Tracker API is a REST service that provides structured access to video game release information.  
Instead of managing its own database, the API uses *Firebase as a backend service*, allowing fast, scalable, and real-time data handling.

This project exposes clean, consistent endpoints for adding, retrieving, updating, deleting, and searching game records.  
All API calls interact with Firebase Realtime Database under the hood, acting as a secure and developer-friendly wrapper.

---

## 🔥 Firebase as the Backend Service

Firebase is used as the system’s:
- *Database-as-a-Service (DBaaS)*  
- *Real-time storage layer*  
- *Auto-ID generator*  
- *Event-driven data manager*

All game entries are stored in: /games/{firebase_auto_id}


The API does not manage SQL tables, schemas, or migrations — Firebase handles the storage, structure, and synchronization automatically.

---

## 🚀 Core Features

### ✔ Add New Game Entries  
POST /add  
Accepts structured data for new games.  
The server sends the payload to Firebase, which generates a unique ID.

### ✔ Retrieve All Games  
GET /games  
Fetches all data from Firebase, with optional filters or sorting applied server-side.

### ✔ Released & Upcoming Filters  
GET /released  
GET /upcoming  
The API retrieves raw data from Firebase and filters them by status.

### ✔ Search Functionality  
GET /search  
Supports partial title matching and optional platform filters.

### ✔ Update Game Data  
PATCH /update/{id}  
The API fetches the target entry from Firebase and applies partial updates without overwriting the entire object.

### ✔ Delete Game Entries  
DELETE /delete/{id}  
Removes the document from the Firebase /games collection.

---

## 📦 Data Model

Each game entry stored in Firebase follows:

```json
{
  "id": "<firebase-generated-id>",
  "title": "Example Game",
  "developer": "Example Studio",
  "publisher": "Example Publishing",
  "platform": ["PC", "Xbox Series X"],
  "releaseDate": "2026-01-30",
  "status": "upcoming"
}

🧱 Why Use Firebase?

Using Firebase as a backend service removes the need to:

Configure traditional SQL databases

Run local database servers

Handle migrations or table schemas

Implement your own realtime synchronization

This lets the API focus purely on:

Validating incoming requests

Structuring responses

Managing business logic

Ensuring clean REST conventions

Handling filtering, sorting, and searching

The result is a lightweight, scalable system.

🧪 Compatible Tools

Since this is a standard REST API, it works with:

Swagger UI / Swagger Editor

Postman

Thunder Client (VSCode)

cURL

Any HTTP client

🔮 Optional Future Extensions

If expanded later, the Firebase service layer can also support:

User authentication (Firebase Auth)

Admin-only endpoints

Subcollections for comments or reviews

Realtime client dashboards

Cloud Functions for delayed releases

Webhooks for game status changes


🗺️ Project Milestones

📝 Milestone 1 — Backend Setup & Basic API Structure

Goal: Set up the project properly and organize the backend so it’s easier to continue development.

What we will do

Organize the backend files instead of keeping everything in server.js 

server

Separate Firebase setup (firebase.js) into its own config folder because it already contains the real Firebase connection details 

firebase

Create clear routes and controllers for games

Update the README.md so it actually explains the project

Write the basic API structure based on the endpoints we already have

Deliverables

Proper folder structure (routes/, controllers/, config/)

Updated README.md with project description and instructions

Documented data model (based on your real Firebase export) 

game-release-tracker-api-67431-…

Draft API documentation (for the existing endpoints)

Checklist

Move Firebase config into /config/firebase.js

Create /routes/games.js and /controllers/gamesController.js

Add validation for POST /add (already partly done in server.js)

Document the existing endpoints

💻 Milestone 2 — Full Game CRUD + Search Feature

Goal: Expand the API so we can fully manage games (Create, Read, Update, Delete) and improve searching.

What we will do

Add missing CRUD operations for games

Add endpoints for update and delete (since we only have POST and GET right now)

Improve search so it supports filters like title, status, and platform

Create seed data (based on your Firebase export) to easily reload sample games

Connect all this to the frontend buttons in index.html 

index

Deliverables

Endpoints for GET by ID, UPDATE, DELETE

Working search endpoint

A seed script to quickly fill the database

Better connection between the API and frontend controls

Checklist

Add PUT /games/:id

Add DELETE /games/:id

Add backend search filtering

Improve /games?q= so it becomes a real search

Test functionality with the demo UI

🔒 Milestone 3 — User Accounts, Login System & Admin Permissions

Goal: Make the project secure and introduce user roles (admin vs regular user).

What we will do

Create signup and login API for users

Implement JWT authentication

Save users in Firebase

Add roles (admin, user)

Allow only admins to add/edit/delete games

Add login UI in the frontend so admins can sign in

Deliverables

POST /register and POST /login

JSON Web Token (JWT) system

Middleware that checks if a user is admin

Updated API spec with security notes

Frontend login modal + storing JWT in localStorage

Checklist

Encrypt passwords

Generate and verify tokens

Protect admin routes

Update index.html to show “Add Game” only when logged in as admin

Test all restricted routes


🧪 Milestone 4 — Search UI, Testing & Final Cleanup

Goal: Finish all UI features, polish the project, fix bugs, and prepare everything for presentation.

What we will do

Add complete search and filtering in the frontend

Make the UI show loading states and error messages

Do full testing (Postman + manual testing)

Finalize the documentation and clean the code

Make sure everything works smoothly

Deliverables

Search UI with filters (title, platform, date, status)

Bug list + fixes

Fully working integration between frontend and backend

Final README.md with instructions

Clean and organized project folders

Checklist

Build the UI filters on index.html

Test all endpoints (400, 401, 403, 404, 500)

Check admin restrictions

Finalize the API documentation

Prepare project for submission/presentation


