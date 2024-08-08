import express from "express";

import homeController from "../controller/homeController";

let router = express.Router();
let initWebRoutes = (app) => {
  // rest API
  router.get("/", homeController.getHomePage);

  router.get("/longhq", (req, res) => {
    return res.send("Welcome with LongHQ");
  });

  return app.use("/", router);
};

module.exports = initWebRoutes;
