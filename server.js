import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "./firebase.js";
import { ref, push, get } from "firebase/database";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/add", async (req, res) => {
    try {
        const gameData = req.body;
        if (!gameData.title || !gameData.releaseDate) {
            return res.status(400).json({ message: "Missing required fields." });
        }
        await push(ref(db, "games"), gameData);
        res.json({ message: "Game added successfully!", data: gameData });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/games", async (req, res) => {
    try {
        const snapshot = await get(ref(db, "games"));
        res.json(snapshot.val() || {});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/upcoming", async (req, res) => {
    try {
        const snapshot = await get(ref(db, "games"));
        const games = snapshot.val() || {};
        const upcoming = Object.values(games).filter(g => g.status === "upcoming");
        res.json(upcoming);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get("/released", async (req, res) => {
    try {
        const snapshot = await get(ref(db, "games"));
        const games = snapshot.val() || {};
        const released = Object.values(games).filter(g => g.status === "released");
        res.json(released);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.listen(3000, () => console.log("API running at http://localhost:3000"));
