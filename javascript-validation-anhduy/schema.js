const Joi = require('joi');


const joiSchema = Joi.object({
	first_name: Joi.string().max(40),
	last_name: Joi.string().max(40),
	email: Joi.string().email(),
	password: Joi.string().min(8).pattern(new RegExp('^[a-zA-Z]+$')),
	password_confirmation: Joi.ref('password')			
});

module.exports = { joiSchema };