const express = require("express");

const adviceControllers = require("../controllers/adviceControllers");

const router = express.Router();

router.get("/advice/getallwisdom", adviceControllers.getWisdom);
router.post("/advice/addwisdom", adviceControllers.createWisdom);
router.put("/advice/updatewisdom/:id", adviceControllers.updateWisdom);
router.delete("/advice/removewisdom/:id", adviceControllers.deleteWisdom);

module.exports = router;
