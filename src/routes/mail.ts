import MailController from "../controller/mail";
import { Router } from "express";

const route = Router();

route.post("/mail/send", MailController.sendMail);

export default route;