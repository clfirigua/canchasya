import { envs } from "../envs/env";

export const jwtConstants = {
  secret: envs.jwtSecret || 'defaultSecret',
};
