import redisClient from './utils/redis';

console.log(redisClient.client.readyState);
