const User = require("../models/user.model");
const passport = require("passport");
const { generateToken } = require("../middleware/auth");
require("../middleware/passport")(passport);

exports.registerUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    await User.create({ username, email, password, role });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occurred!" });
  }
};

exports.loginUser = (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    console.log("user", user);
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: "An error occurred while logging in" });
    }
    if (!user) {
      return res.status(401).json({ message: "Invalid login credentials" });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .json({ message: "An error occurred while logging in" });
      }
      const { _id, username, role } = user;
      const payload = { userId: _id, username, role };
      const token = generateToken(payload);
      res.cookie("token", token, { httpOnly: true });
      return res.status(200).json({ token:token, message: "Login successful" });
    });
  })(req, res, next);
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occurred!" });
  }
};

//logout

exports.logoutUser = async (req, res, next) => {
  res.cookie("token", "null", {
    expire: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
};
