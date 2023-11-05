import authService from "../services/authService.js";
import cookieOptions from "../config/cookieOptions.js";

const authController = {
  async signup(req, res) {
    const { email, password, phoneNumber } = req.body;
    const { accessToken } = await authService.signup({
      email,
      password,
      phoneNumber,
    });

    res.cookie("accessToken", accessToken, cookieOptions);
    res.status(201).json({ accessToken });
  },

  async login(req, res) {
    const { email, password } = req.body;
    const { accessToken } = await authService.login({ email, password });

    res.cookie("accessToken", accessToken, cookieOptions);
    res.status(200).json({ accessToken });
  },

  async logout(req, res) {
    res.clearCookie("accessToken", cookieOptions);
    res.status(200).send();
  },
};

export default authController;
