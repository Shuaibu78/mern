const asyncHandler = require("express-async-handler");
// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals" })
});

// @desc set goals
// @route POST /api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("please add a text value")
  }
  res.status(200).json({ message: "set goals" })
});

// @desc update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goals ${req.params.id}` })
});

// @desc delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goals ${req.params.id}` })
});


module.exports = { getGoals, setGoals, updateGoals, deleteGoals }
