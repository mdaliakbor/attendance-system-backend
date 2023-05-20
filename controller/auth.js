const { registerService, loginService } = require("../service/auth");

const registerController = async (req, res, next) => {
  /**
   * req body
   * req params
   * req header
   * req query
   * req cookies
   */
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Invalid Data" });
  }
  try {
    const user = await registerService({
      name,
      email,
      password,
    });
    return res.status(201).json({ message: "User create successfully", user });
  } catch (e) {
    next(e);
  }
};

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const token = await loginService({ email, password });
    res.status(200).json({ message: "Login success", token });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  registerController,
  loginController,
};
