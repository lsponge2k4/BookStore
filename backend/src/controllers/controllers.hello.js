import * as HelloService from "../services/services.hello.js";

export const hello = async (req, res) => {
    const data = HelloService.sayHello();
    res.json({ message: data });
};
