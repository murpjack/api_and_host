import express from'express';
const router = express.Router();

const adviceControllers = require("../controllers/adviceControllers");
const diningControllers = require("../controllers/diningControllers");
const planControllers = require("../controllers/itinerariesControllers");
const leisureControllers = require("../controllers/leisureControllers");

/**
 * Routes for advice/wisdom.
 */
router.get("/advice/getallwisdom", adviceControllers.getWisdom);
router.post("/advice/addwisdom", adviceControllers.createWisdom);
router.put("/advice/updatewisdom/:id", adviceControllers.updateWisdom);
router.delete("/advice/removewisdom/:id", adviceControllers.deleteWisdom);

/**
 * Routes for dining.
 */
router.get("/dining/getallvenues", diningControllers.getDiners);
router.post("/dining/addvenue", diningControllers.createDiner);
router.put("/dining/updatevenuedetail/:id", diningControllers.updateDiner);
router.delete("/dining/removevenue/:id", diningControllers.deleteDiner);

/**
 * Routes for itineraries.
 */
router.get("/plan/getallitineraries", planControllers.getPlans);
router.post("/plan/additinerary", planControllers.createPlan);
router.put("/plan/updatitinerary/:id", planControllers.updatePlan);
router.delete("/plan/removeitinerary/:id", planControllers.deletePlan);

/**
 * Routes for activities.
 */
router.get("/leisure/getallvenues", leisureControllers.getActivities);
router.post("/leisure/addvenue", leisureControllers.createActivity);
router.put("/leisure/updatevenuedetail/:id", leisureControllers.updateActivity);
router.delete("/leisure/removevenue/:id", leisureControllers.deleteActivity);

module.exports = router;