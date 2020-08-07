const express = require("express");

const planControllers = require("../controllers/itinerariesControllers");

const router = express.Router();

router.get("/plan/getallitineraries", planControllers.getPlans);
router.post("/plan/additinerary", planControllers.createPlan);
router.put("/plan/updatitinerary/:id", planControllers.updatePlan);
router.delete("/plan/removeitinerary/:id", planControllers.deletePlan);

module.exports = router;
