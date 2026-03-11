const express = require("express");
const router = express.Router();

// GET /admin/projects
router.get("/projects", (req, res) => {
  res.status(200).json({ message: "All projects (admin view)", data: [] });
});

// GET /admin/creators
router.get("/creators", (req, res) => {
  res.status(200).json({ message: "All creators", data: [] });
});

// PATCH /admin/profile
router.patch("/profile", (req, res) => {
  res.status(200).json({ message: "Admin profile updated", data: {} });
});

// PATCH /admin/payment-config
router.patch("/payment-config", (req, res) => {
  res.status(200).json({ message: "Payment config updated", data: {} });
});

// PATCH /admin/commenting-policies
router.patch("/commenting-policies", (req, res) => {
  res.status(200).json({ message: "Commenting policies updated", data: {} });
});

// PATCH /admin/projects/:projectId/moderate
router.patch("/projects/:projectId/moderate", (req, res) => {
  res.status(200).json({ message: "Project moderated", data: {} });
});

// DELETE /admin/comments/:commentId
router.delete("/comments/:commentId", (req, res) => {
  res.status(200).json({ message: "Comment removed" });
});


// POST /admin/categories
router.post("/categories", (req, res) => {
  res.status(201).json({ message: "Category created", data: {} });
});

// POST /admin/categories/:categoryId/subcategories
router.post("/categories/:categoryId/subcategories", (req, res) => {
  res.status(201).json({ message: "Subcategory created", data: {} });
});

// POST /admin/learning-paths
router.post("/learning-paths", (req, res) => {
  res.status(201).json({ message: "Learning path created", data: {} });
});

module.exports = router;
