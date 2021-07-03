"use strict";
const joi_1 = require("@hapi/joi");
const signupValidation = (user) => {
    const schema = {
        username: joi_1.default.string().min(6).required(),
        email: joi_1.default.string().min(6).required().email(),
        password: joi_1.default.string().min(6).required(),
    };
    return joi_1.default.validate(user, schema);
};
const loginValidation = (user) => {
    const schema = {
        email: joi_1.default.string().min(6).required().email(),
        password: joi_1.default.string().min(6).required(),
    };
    return joi_1.default.validate(user, schema);
};
module.exports = { signupValidation, loginValidation };
//# sourceMappingURL=auth.js.map