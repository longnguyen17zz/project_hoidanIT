import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homePage.ejs", { data: data });
  } catch (e) {
    console.log(e);
  }
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(req.body);
  console.log(message);

  return res.send("post crud from server");
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  // console.log(data);
  return res.render("displayCRUD.ejs", { dataTable: data });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    return res.render("editCRUD.ejs", { user: userData });
    // console.log(userData);
  }
  return res.send("User not found!");
};

let putCRUD = async (req, res) => {
  let data = req.body;
  await CRUDService.updateUserDataById(data);
  let dataTable = await CRUDService.getAllUser();
  return res.render("displayCRUD.ejs", { dataTable: dataTable });

  // return res.render("update done! ");
};

let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDService.deleteUserDataById(id);
    // return res.render("displayCRUD.ejs");
    return res.send("User deleted!");
  } else {
    return res.send("User not found!");
  }
};
module.exports = {
  getHomePage,
  deleteCRUD,
  getCRUD,
  postCRUD,
  displayGetCRUD,
  getEditCRUD,
  putCRUD,
};
