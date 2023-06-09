const userRouter = require("./user.route");
const authRouter = require("./auth.route");

module.exports = app => {
    app.use("/api/user", userRouter);
    app.use("/api/auth", authRouter);
}