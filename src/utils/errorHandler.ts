import { Response } from "express";
import ERROR_CODE from "./constants/ERROR_CODE";
import ERROR_MESSAGE from "./constants/ERROR_MESSAGE";

export default function errorHandler(res: Response, err: Error) {
   let message = err.message;

   return res
      .status(ERROR_CODE[message] || 500)
      .json({ error: ERROR_MESSAGE[message] || message });
}
