const blogPostData = require("../Model/Schema");
const getData = (req, res) => {
  res.json("I am getData methode");
};

const PostBlogReq = async (req, res) => {
  try {
    const { title, content } = req.body;
    // console.log("req", req.body);
    const blogImg = req.files ? req.files.blogImg[0].filename : null;
    const sendData = new blogPostData({
      title,
      content,
      blogImg,
    });
    await sendData.save();
    res.json({
      message: "Blog post successfully",
      success: true,
    });
  } catch {
    res.json({ message: "Something went wrong", success: false });
  }
};

const getBlogReq = async (req, res) => {
  await blogPostData.find({}).then((err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};
module.exports = { PostBlogReq, getBlogReq, getData };
