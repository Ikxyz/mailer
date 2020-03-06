import { NextFunction, Response, Request } from "express"

export default new class ErrorHandler {

    onErrorOccur(err: Error, req: Request, res: Response, next: NextFunction) {
        console.warn(`error occurred: ${err.message}`)
        res.status(500).json({ status: false, message: err.message });
    }

}