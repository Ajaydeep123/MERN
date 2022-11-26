const express = require('express');
const { protectRoute, isAuthorised } = require('../helper');
const planRouter = express.Router();
const { getAllPlans, getPlan, createPlan, updatePlan, deletePlan, top3Plans } = require('../controller/planController');

//everyone should have option to view all plans 

planRouter
    .route('/all')
    .get(getAllPlans);

planRouter
    .route('/top3')
    .get(top3Plans)

planRouter.use(protectRoute)  // but only after loggin in can you choose a plan 
planRouter
    .route('single/:id')
    .get(getPlan)

planRouter.use(isAuthorised(['admin', 'restaurantowner'])) //now, if you're logged in as admin or restaurant owner, you can perform CRUD operations
planRouter
    .route("/crud")  // we don't need id to create a plan
    .post(createPlan);

planRouter
    .route('/crud/:id')
    .patch(updatePlan)
    .delete(deletePlan)


module.exports = planRouter;