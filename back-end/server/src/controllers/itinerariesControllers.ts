import itineraryModel from "../models/itinerary";

// const createPlan = (req, res) => {
//   const body = req.body;
//   console.log("res", res);

//   if (!body) {
//     return res.status(400).json({
//       success: false,
//       error: "You must provide a plan",
//     });
//   }

//   const plan = new Plan(body);
//   if (!plan) {
//     // TODO: handle error response
//     return res.status(400).json({ success: false, error: "err" });
//   }

//   plan
//     .save()
//     .then(() =>
//       res.status(201).json({
//         success: true,
//         id: plan._id,
//         message: "Plan created!",
//       })
//     )
//     .catch((error) =>
//       res.status(400).json({
//         error,
//         message: "Plan not created!",
//       })
//     );
// };

// const updatePlan = async (req, res) => {
//   const body = req.body;

//   if (!body) {
//     return res.status(400).json({
//       success: false,
//       error: "You must provide a body to update",
//     });
//   }

//   Plan.findOne({ _id: req.params.id }, (err, plan) => {
//     if (err) {
//       return res.status(404).json({
//         err,
//         message: "Plan not found!",
//       });
//     }
//     plan._id = body._id;
//     plan.name = body.name;
//     plan.description = body.description;
//     plan.approvalStatus = body.approvalStatus;
//     plan.priceRating = body.priceRating;
//     plan.diningID = body.diningID;
//     plan.diner = body.diner;
//     plan.activityID = body.activityID;
//     plan.adviceID = body.adviceID;
//     plan.createdBy = body.createdBy;

//     plan
//       .save()
//       .then(() => {
//         return res.status(200).json({
//           success: true,
//           id: plan._id,
//           message: "Plan updated!",
//         });
//       })
//       .catch((error) => {
//         return res.status(404).json({
//           error,
//           message: "Plan not updated!",
//         });
//       });
//   });
// };

// const deletePlan = async (req, res) => {
//   await Plan.findOneAndDelete({ _id: req.params.id }, (err, plan) => {
//     if (err) {
//       return res.status(400).json({ success: false, error: err });
//     }

//     if (!plan) {
//       return res.status(404).json({ success: false, error: `Plan not found` });
//     }

//     return res.status(200).json({ success: true, data: plan });
//   }).catch((err) => console.log(err));
// };

export const getPlans = async (req: any, res: any) => {
  await itineraryModel.find({}, (error: any, plans: any) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (!plans.length) {
      return res.status(404).json({ success: false, error: `Plan not found` });
    }
    return res.status(200).json({ success: true, data: plans });
  }).catch((error) => console.log(error));
};

export default {
  // createPlan,
  // updatePlan,
  // deletePlan,
  getPlans
};
