import express from'express';
import * as controllers from "../controllers";

export const router = express.Router();

// This is a test route!!
// router.get('/test', async (req, res) => {
//   res.json({message: 'pass!'})
// });

router.get("/user/getallusers", controllers.getAllUsers);
router.post("/user/addsingleuser", controllers.createUser);
router.put("/user/updatesingleuser", controllers.updateUser);
router.delete("/user/removesingleuser", controllers.deleteUser);

export default router;
