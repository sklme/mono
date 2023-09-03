import { registerAs } from '@nestjs/config';

export default registerAs('token', () => {
  return {
    t1: 't1',
    t2: {
      u: 'u',
      p: 'p',
    },
  };
});
