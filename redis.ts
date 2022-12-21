import Redis from 'ioredis';

let client = new Redis(process.env.REDIS_URL!);

export default client;