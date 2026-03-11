require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const authRoutes     = require("./routes/auth");
const userRoutes     = require("./routes/users");
const categoryRoutes = require("./routes/categories");
const projectRoutes  = require("./routes/projects");
const searchRoutes   = require("./routes/search");
const messageRoutes  = require("./routes/messages");
const creatorRoutes  = require("./routes/creator");
const adminRoutes    = require("./routes/admin");

const app = express();

connectDB();

app.use(express.json());

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use("/auth",       authRoutes);
app.use("/users",      userRoutes);
app.use("/categories", categoryRoutes);
app.use("/projects",   projectRoutes);
app.use("/search",     searchRoutes);
app.use("/messages",   messageRoutes);
app.use("/creator",    creatorRoutes);
app.use("/admin",      adminRoutes);

// ─── 404 ──────────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ─── Error Handler ────────────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
