const express = require("express");
const {
  PostBlogReq,
  getBlogReq,
  getData,
} = require("../Controller/Controller");
const ImageUpload = require("../File/BlogImage");
const loginWithGoogleRequest = require("../Controller/Login");

const router = express.Router();

router.get("/", getData);
router.post("/api/blogpost", ImageUpload, PostBlogReq);
router.get("/api/blogget", getBlogReq);
router.post("/api/google-auth", loginWithGoogleRequest);

module.exports = router;
