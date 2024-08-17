import express from "express";

import homeController from "../controller/homeController";

let router = express.Router();
let initWebRoutes = (app) => {
  // rest API
  router.get("/", homeController.getHomePage);

  router.get("/longhq", (req, res) => {
    return res.send("Welcome with LongHQ");
  });
  router.post("/post-crud", homeController.postCRUD);

  router.get("/crud", homeController.getCRUD);

  router.get("/get-crud", homeController.displayGetCRUD);

  router.get("/edit-crud", homeController.getEditCRUD);

  router.post("/put-crud", homeController.putCRUD);

  router.get("/delete-crud", homeController.deleteCRUD);

  return app.use("/", router);
};

module.exports = initWebRoutes;
