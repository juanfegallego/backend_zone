const router = require("express").Router();
const userRouter = require("./routes/userRouter");
const eventRouter = require("./routes/eventRouter");

router.use("/user", userRouter);
router.use("/event", eventRouter);

module.exports = router;