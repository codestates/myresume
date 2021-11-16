const express = require("express");
const router = express.Router();
const { login, logout, signup, getAccessToken, getKakaoAccess } = require("../controllers/Auth");

router.post("/login", login);

router.get("/logout", logout);

router.post("/signup", signup);

router.get("/accessToken", getAccessToken);

router.get("/kakao", getKakaoAccess);

module.exports = router;
