import express from "express";
import multer from "multer";
import processTXT from "./processTxt";
import addEntryForLeg from "./addEntryForLeg";
import addOperator from "./addOperator";
import confirmMissions from "./confirmMissions";
import deleteOperator from "./deleteOperator";
import deleteEntry from "./deleteEntry";
import getConfig from "./getConfig";
import getEntriesForLeg from "./getEntriesForLeg";
import getMissions from "./getMissions";
import getMissionsOnDate from "./getMissionsOnDate";
import getMissionsUpcoming from "./getMissionsUpcoming";
import getMostRecentMission from "./getMostRecentMission";
import getLeg from "./getLeg";
import getLegs from "./getLegs";
import getCountryCodes from "./getCountryCodes";
import getOperators from "./getOperators";
import deleteMission from "./deleteMission";
import saveLegRoute from "./saveLeg";
import saveConfig from "./saveConfig";
import updateMission from "./updateMission";

const upload = multer({ storage: multer.memoryStorage() }); // dest: "uploads/" for pdfs
const routes = express.Router();

routes.post("/processTXT", upload.single("file"), processTXT);
routes.post("/confirmMissions", confirmMissions);
routes.post("/updateMission", updateMission);
routes.post("/deleteMission", deleteMission);
routes.post("/deleteOperator", deleteOperator);
routes.post("/addEntryForLeg", addEntryForLeg);
routes.post("/addOperator", addOperator);
routes.post("/saveLeg", saveLegRoute);
routes.post("/saveConfig", saveConfig);
routes.post("/deleteEntry", deleteEntry);
routes.get("/getConfig", getConfig);
routes.get("/getMissions", getMissions);
routes.get("/getMissionsOnDate", getMissionsOnDate);
routes.get("/getMissionsUpcoming", getMissionsUpcoming);
routes.get("/getMostRecentMission", getMostRecentMission);
routes.get("/getOperators", getOperators);
routes.get("/getCountryCodes", getCountryCodes);
routes.get("/getLegs", getLegs);
routes.get("/getLeg", getLeg);
routes.get("/getEntriesForLeg", getEntriesForLeg);

export default routes;
