// src/controllers/user.controller.js

exports.getAllUsers = (req, res) => {
  console.log("GET /api/users hit");
  res.json({
    success: true,
    message: "List of users will come from DB here",
  });
};
