/* eslint-disable */
import redis from "redis";
import util from "util";
const RedisClient = class {
  constructor() {
    this.client = redis.createClient();
    this.client.on("error", (err) => {
      console.log(err);
    });
    this.client.get = util.promisify(this.client.get).bind(this.client);
  }
  isAlive() {
    return this.client.connected;
  }
  async get(key) {
    return await this.client.get(key);
  }
  async set(key, value, duration) {
    await this.client.setex(key, value, duration);
  }
  async del(key) {
    await this.client.del(key);
  }
};
module.exports = new RedisClient();
