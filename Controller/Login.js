const userData = require("../Model/LoginSchema");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "Api";
const loginWithGoogleRequest = async (req, res) => {
  const { token } = req.body; // Assuming the token is sent in the request body

  try {
    // Verify the Google token with Google's servers
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`
    );
    console.log(response);
    const loginCredential = response.data;
    const username = loginCredential.name;
    const email = loginCredential.email;

    const jwtPayload = {
      userId: loginCredential.sub,
      email: loginCredential.email,
    };
    const authToken = jwt.sign(jwtPayload, SECRET_KEY);

    const existingUser = await userData.findOne({ email: email });
    if (!existingUser) {
      const data = new userData({
        username: username,
        email: email,
      });
      await data.save();
    }
    const useremail = await userData.findOne({ email: email });

    // Send the JWT as part of the response
    res.status(200).json({
      token: authToken,
      email: useremail.email,
      message: "Authentication successful",
      success: true,
    });

    //   res.status(200).json({ message: 'Authentication successful' });
  } catch (error) {
    console.error("Error verifying Google token:", error);
    res.status(400).json({ message: "Authentication failed", success: false });
  }
};

module.exports = loginWithGoogleRequest;
