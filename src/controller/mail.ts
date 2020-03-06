import { Request, Response, NextFunction } from "express";
import * as NodeMailer from "nodemailer";
import { asyncHandler } from "../middleware/async";
import { MailRequest } from "../model/interface";
export default new class MailSenderController {



    sendMail = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

        const data: MailRequest = req.body;

        const transport = NodeMailer.createTransport(data.config);

        await transport.sendMail(data.option);

        console.log(`Mail sent`);

        res.json({ status: true, message: "sent" })

    });


}