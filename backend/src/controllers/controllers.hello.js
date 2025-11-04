import * as HelloService from "../services/services.hello.js";
import * as Response from "../utils/response.js";

export const hello = async (req, res) => {
    const data = HelloService.sayHello();
    res.json({ message: data });
};
