import * as HelloService from "../services/services.hello.js";
import * as Response from "../utils/response.js";
import logger from "../config/logger.js";

export const hello = async (req, res) => {
    const data = HelloService.sayHello();
    logger.info("hello controller success:", { message: data });
    res.json({ message: data });
};
