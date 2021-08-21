const router = require("express").Router();
const eventController = require("../controllers/eventController");
const admin = require("../middleware/admin");
const auth = require("../middleware/auth");

//GET - Return all Events in the DB

router.get("/", async (req, res) => {
  try {
    res.json(await eventController.findAllEvents());
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

//POST - Creates a new Event in the DB
//  requeire de el rol de admin *
router.post("/create",admin, async (req, res) => {
  try {
    const event = req.body;
    res.json(await eventController.createEvent(event));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});
// PUT modify Event //admin*
router.put("/",admin, async (req, res) => {
  try {
    const data = req.body;
    res.json(await eventController.modifyEvent(data));
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

// admin *

router.post("/:adminDelete",admin,  async (req, res) => {
  try {
    const id = req.body.id;
    res.json(await eventController.deleteEvent(id));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});


module.exports = router;
