const express = require("express");
const router = express.Router();

// GET /projects
router.get("/", (req, res) => {
  res.status(200).json({ message: "All projects", data: [] });
});

// GET /projects/featured
router.get("/featured", (req, res) => {
  res.status(200).json({ message: "Featured projects", data: [] });
});

// GET /projects/filter  
router.get("/filter", (req, res) => {
  res.status(200).json({ message: "Filtered projects", data: [] });
});

// GET /projects/category/:categoryId
router.get("/category/:categoryId", (req, res) => {
  res.status(200).json({ message: "Projects in category", data: [] });
});

// GET /projects/category/:categoryId/subcategory/:subId
router.get("/category/:categoryId/subcategory/:subId", (req, res) => {
  res.status(200).json({ message: "Projects in subcategory", data: [] });
});

// GET /projects/:projectId
router.get("/:projectId", (req, res) => {
  res.status(200).json({ message: "Project details", data: {} });
});


// GET /projects/:projectId/creator
router.get("/:projectId/creator", (req, res) => {
  res.status(200).json({ message: "Project creator profile", data: {} });
});

// POST /projects
router.post("/", (req, res) => {
  res.status(201).json({ message: "Project created", data: {} });
});

// PATCH /projects/:projectId
router.patch("/:projectId", (req, res) => {
  res.status(200).json({ message: "Project updated", data: {} });
});


// GET /projects/:projectId/rewards
router.get("/:projectId/rewards", (req, res) => {
  res.status(200).json({ message: "All rewards", data: [] });
});

// GET /projects/:projectId/rewards/:rewardId
router.get("/:projectId/rewards/:rewardId", (req, res) => {
  res.status(200).json({ message: "Reward details", data: {} });
});

// POST /projects/:projectId/rewards
router.post("/:projectId/rewards", (req, res) => {
  res.status(201).json({ message: "Reward created", data: {} });
});

// PATCH /projects/:projectId/rewards/:rewardId
router.patch("/:projectId/rewards/:rewardId", (req, res) => {
  res.status(200).json({ message: "Reward updated", data: {} });
});

// DELETE /projects/:projectId/rewards/:rewardId
router.delete("/:projectId/rewards/:rewardId", (req, res) => {
  res.status(200).json({ message: "Reward deleted" });
});


// PATCH /projects/:projectId/fund
router.patch("/:projectId/fund", (req, res) => {
  res.status(200).json({ message: "Project funded", data: {} });
});

// PATCH /projects/:projectId/:rewardTier/pledge
router.patch("/:projectId/:rewardTier/pledge", (req, res) => {
  res.status(200).json({ message: "Pledge with reward successful", data: {} });
});


// GET /projects/:projectId/comments
router.get("/:projectId/comments", (req, res) => {
  res.status(200).json({ message: "Comments", data: [] });
});

// POST /projects/:projectId/comments
router.post("/:projectId/comments", (req, res) => {
  res.status(201).json({ message: "Comment added", data: {} });
});

// GET /projects/:projectId/updates
router.get("/:projectId/updates", (req, res) => {
  res.status(200).json({ message: "Updates", data: [] });
});

// POST /projects/:projectId/updates
router.post("/:projectId/updates", (req, res) => {
  res.status(201).json({ message: "Update posted", data: {} });
});

// GET /projects/:projectId/faqs
router.get("/:projectId/faqs", (req, res) => {
  res.status(200).json({ message: "FAQs", data: [] });
});

// POST /projects/:projectId/faqs
router.post("/:projectId/faqs", (req, res) => {
  res.status(201).json({ message: "FAQ added", data: {} });
});

// PATCH /projects/:projectId/follow
router.patch("/:projectId/follow", (req, res) => {
  res.status(200).json({ message: "Creator followed" });
});


module.exports = router;
