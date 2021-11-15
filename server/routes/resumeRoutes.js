const express = require("express");
const router = express.Router();
const { editResume, addResume, deleteResume } = require("../controllers/Resume");
const verifyAceess = require("../middleware/verifyAccessToken");

router.post("/", verifyAceess, addResume);

router.route("/:resumeId").put(verifyAceess, editResume).delete(verifyAceess, deleteResume);

module.exports = router;
