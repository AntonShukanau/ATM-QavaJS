import web from './envs/web';
import local from './envs/local';
const env = process.env.ENV;

const envs = {
  web,
  local
}[env ?? 'local'];

export default envs;
