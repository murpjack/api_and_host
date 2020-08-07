const express = require("express");

const leisureControllers = require("../controllers/leisureControllers");

const router = express.Router();

router.get("/leisure/getallvenues", leisureControllers.getActivities);
router.post("/leisure/addvenue", leisureControllers.createActivity);
router.put("/leisure/updatevenuedetail/:id", leisureControllers.updateActivity);
router.delete("/leisure/removevenue/:id", leisureControllers.deleteActivity);

module.exports = router;
