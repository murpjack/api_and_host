const express = require("express");

const diningControllers = require("../controllers/diningControllers");

const router = express.Router();

router.get("/dining/getallvenues", diningControllers.getDiners);
router.post("/dining/addvenue", diningControllers.createDiner);
router.put("/dining/updatevenuedetail/:id", diningControllers.updateDiner);
router.delete("/dining/removevenue/:id", diningControllers.deleteDiner);

module.exports = router;
