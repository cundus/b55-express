import Joi from "joi";

export const createPostSchema = Joi.object({
   title: Joi.string().min(3).max(30).required(),
   body: Joi.string().required(),
});
