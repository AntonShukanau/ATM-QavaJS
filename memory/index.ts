import web from './web';
import local from './local';
const env = process.env.ENV;

const envs = {
  web,
  local
}[env ?? 'local'];

export default envs;
