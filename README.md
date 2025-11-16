# ITCC-14_Group-Late-Comers
# GameReleaseTrackerAPI

Game Release Tracker API - ASP.NET Core (.NET 7)

## Features
- RESTful API to add/list/update/delete game release entries.
- Two backend options included: **Firestore** (Google Cloud Firestore) and **Realtime Database (Firebase)**.
- Minimal frontend demo and Postman collection included.

## Quick start
1. Open solution in Visual Studio or `dotnet` CLI.
2. Fill `appsettings.json` with your Firebase project credentials.
3. Choose backend in `Program.cs` by registering the appropriate service implementation.
4. Run the project (HTTPS). Swagger available at `/swagger` in Development.

## Notes
- Do not commit service account JSON to version control.
- For production use, add authentication and secure your database rules.
