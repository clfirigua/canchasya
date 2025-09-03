import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  JWTSECRET:string;
  
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
    JWTSECRET: joi.string().required(),
  })
  .unknown(true);
const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error('Config validate Error' + error.message);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  jwtSecret: envVars.JWTSECRET,
};
