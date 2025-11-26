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
